import React, { useEffect, useState } from "react";

const Project = () => {
  const [addProjBtn, setAddProjBtn] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postLink, setProjectLink] = useState("");

  useEffect(() => {
    if (title && description && postLink) {
      setAddProjBtn(true);
    } else {
      setAddProjBtn(false);
    }
  }, [title, description, postLink]);

  return (
    <div className="manage-projects bg-slate-600 p-2 mt-4 rounded-[10px]">
          <h1 className="text-2xl">Projects</h1>
          <div className="border-t p-2 flex justify-end">
            <button
              type="button"
              className="btn btn-accent text-black"
              disabled={!addProjBtn}
            >
              Add Project
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
              value={postLink}
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
