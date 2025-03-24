const { errorHandler } = require("../authentication");
const Project = require("../models/Project");

const fs = require("fs");
const multer = require("multer");
const { google } = require("googleapis");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
}).array("photos", 10);

module.exports.upload = upload;

const credentials = {
  type: process.env.GOOGLE_TYPE,
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Convert `\n` to actual newlines
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: process.env.GOOGLE_AUTH_URI,
  token_uri: process.env.GOOGLE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
  universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN
};

// console.log(credentials);
 
// Gdrive Authentication
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

async function uploadToDrive(filePath, fileName) {
  const fileMetaData = {
    name: fileName,
    parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
  };
  const media = {
    mimeType: "image/jpeg",
    body: fs.createReadStream(filePath),
  };

  const file = await drive.files.create({ resource: fileMetaData, media });
  await drive.permissions.create({
    fileId: file.data.id,
    requestBody: { role: "reader", type: "anyone" },
  });

  fs.unlinkSync(filePath);
  return `https://drive.google.com/uc?id=${file.data.id}`;
}

module.exports.uploadProject = async (req, res) => {
  try {
    const uploadedImages = [];
    if (req.files) {
      for (const file of req.files) {
        const imageUrl = await uploadToDrive(file.path, file.originalname);
        uploadedImages.push({ link: imageUrl });
      }
    }

    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      projectLink: req.body.projectLink,
      photos: uploadedImages,
    });
    const savedProject = await newProject.save();
    if (savedProject) {
      res.status(201).send({ success: true, message: "Added Successfully" });
    } else {
      res
        .status(201)
        .send({ success: false, message: "Failed to save new project" });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports.updateProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const updatedDetails = {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
    };

    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      updatedDetails,
      { new: true }
    );
    if (updatedProject) {
      res.status(200).send({ success: true, updatedProject });
    } else {
      res
        .status(400)
        .send({ success: false, message: "Failed to update project details" });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    if (projects) {
      res.status(200).send({ success: true, projects });
    } else {
      res.status(404).send({ success: false, message: "No projects found" });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const deletedProject = await Project.findByIdAndDelete(projectId);
    if (deletedProject) {
      res
        .status(200)
        .send({ success: true, message: "Project Deleted Successfully" });
    } else {
      res
        .status(404)
        .send({ success: false, message: "Failed to delete a project" });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports.getProject = async (req, res) => {
  try {
    const projects = await Project.findById(req.params.projectId);
    if (projects) {
      res.status(200).send({ success: true, projects });
    } else {
      res.status(404).send({ success: false, message: "No project found" });
    }
  } catch (error) {
    errorHandler(error, req, res);
  }
};
