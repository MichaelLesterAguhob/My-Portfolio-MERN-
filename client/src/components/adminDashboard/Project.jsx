import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const Project = () => {
  const API_BASE_URL =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_BASE_URL_DEV
      : process.env.REACT_APP_API_BASE_URL;
  const [addProjBtn, setAddProjBtn] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [saving, setSaving] = useState(false);
  const [photos, setPhotos] = useState([]);
  const fileInput = useRef(null);

  const handlePhotosChange = (e) => {
    setPhotos([...e.target.files]);
  };

  //DISABLING AND ENABLING ADD PROJECT BUTTON
  useEffect(() => {
    if (title && description && projectLink && photos.length !== 0) {
      setAddProjBtn(true);
    } else {
      setAddProjBtn(false);
    }
  }, [title, description, projectLink, photos]);

  // ADDING PROJECT DATA
  const addProject = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("description", description.trim());
      formData.append("projectLink", projectLink.trim());

      for (const file of photos) {
        formData.append("photos", file);
      }

      const addProjectRespo = await fetch(`${API_BASE_URL}/projects/`, {
        method: "POST",
        body: formData,
      });

      const respo = await addProjectRespo.json();

      // Determine if status code is not OK
      if (!addProjectRespo.ok) {
        Swal.fire({
          icon: "error",
          title: "Error Occurred",
          text: respo.message,
          timer: 2000,
        });
        console.log(respo.error || respo.message);
        return;
      }

      if (respo) {
        Swal.fire({
          icon: "success",
          text: respo.message,
          timer: 2000,
        });
        setTitle("");
        setDescription("");
        setProjectLink("");
        setPhotos([]);
        fileInput.current.value = "";
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Unexpected Error Occurred",
        timer: 2000,
      });
      console.log(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={addProject}
      encType="multipart/form-data"
      className="manage-projects bg-slate-600 p-2 mt-4 rounded-[10px]"
    >
      <h1 className="text-2xl">Projects</h1>
      <div className="border-t p-2 flex justify-end">
        <button
          type="submit"
          className="btn btn-accent text-black"
          disabled={!addProjBtn || saving}
        >
          {saving ? "Saving..." : "Add Project"}
        </button>
      </div>

      <div className="grid lg:grid-cols-2">
        <label>Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter Title"
        />

        <label>Description</label>
        <textarea
          type="textA+rea"
          name="description"
          id="description"
          rows="5"
          className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Enter Description"
        ></textarea>

        <label>Project Link</label>
        <input
          type="text"
          name="link"
          id="link"
          className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1"
          value={projectLink}
          onChange={(e) => {
            setProjectLink(e.target.value);
          }}
          placeholder="Enter Link"
        />

        <label>Project Photos</label>
        <input
          type="file"
          name="photos"
          id="photos"
          ref={fileInput}
          className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1 hover:cursor-pointer"
          multiple
          onChange={handlePhotosChange}
        />
      </div>
    </form>
  );
};

export default Project;
