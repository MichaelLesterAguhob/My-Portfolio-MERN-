import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Project = () => {
  const API_BASE_URL = process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_BASE_URL_DEV : process.env.REACT_APP_API_BASE_URL;
  const [addProjBtn, setAddProjBtn] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [saving, setSaving] = useState(false);

  //DISABLING AND ENABLING ADD PROJECT BUTTON
  useEffect(() => {
    if (title && description && projectLink) {
      setAddProjBtn(true);
    } else {
      setAddProjBtn(false);
    }
  }, [title, description, projectLink]);

  // ADDING PROJECT DATA
  const addProject = async() => {
    setSaving(true);
    try {
        const addProjectRespo = await fetch(`${API_BASE_URL}/projects/`, {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
            title: title.trim(),
            description: description.trim(),
            projectLink: projectLink.trim()
          })
        })

        const respo = await addProjectRespo.json();

        // Determine if status code is not OK
        if(!addProjectRespo.ok) {
            Swal.fire({
              icon:'error',
              title: "Error Occurred",
              text: respo.message,
              timer: 2000
            })
            console.log(respo.error || respo.message);
            return;
        }

        if(respo) {
          Swal.fire({
            icon:'success',
            text: respo.message,
            timer: 2000
          })
          setTitle("");
          setDescription("");
          setProjectLink("");
        }
    } catch (error) {
      Swal.fire({
        icon:'error',
        text: "Unexpected Error Occurred",
        timer: 2000
      })
      console.log(error)
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="manage-projects bg-slate-600 p-2 mt-4 rounded-[10px]">
          <h1 className="text-2xl">Projects</h1>
          <div className="border-t p-2 flex justify-end">
            <button
              type="button"
              className="btn btn-accent text-black"
              disabled={!addProjBtn || saving}
              onClick={addProject}
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
              className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1 hover:cursor-pointer"
              // value={}
              // onChange={(e) => {}}
            />
          </div>
        </div>
  );
};

export default Project;
