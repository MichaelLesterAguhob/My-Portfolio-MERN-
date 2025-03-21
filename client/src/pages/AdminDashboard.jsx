import React, { useContext, useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import UserContext from "../userContext";

const AdminDashboard = () => {
  const { user } = useContext(UserContext);

  const [addPostBtn, setAddPostBtn] = useState(false);
  const [addProjBtn, setAddProjBtn] = useState(false);

  const [postTitle, setPostTitle] = useState("");
  const [content, setContent] = useState("");
  const [postProjectLink, setPostProjLink] = useState("");
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const [photos, setPhotos] = useState("");

  useEffect(() => {
    if (title && description && link) {
      setAddProjBtn(true);
    } else {
      setAddProjBtn(false);
    }
  }, [title, description, link]);

  useEffect(() => {
    if (postTitle && content && postProjectLink) {
      setAddPostBtn(true);
    } else {
      setAddPostBtn(false);
    }
  }, [postTitle, content, postProjectLink]);

  return user._id === null || localStorage.getItem("token") === null ? (
    <Navigate to={"/login/mlca"} />
  ) : (
    <div className="h-[100vh] flex ">
      <div className="bg-slate-700 w-[90%] md:w-[65%] mx-auto p-4 overflow-y-scroll">
        <div className="relative md:flex justify-between border-b border-blue-500 p-4 pt-[85px]">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          
        </div>

        {/* ADDING BLOG POST */}
        <div className="manage-projects bg-slate-600 p-2 mt-4 rounded-[10px]">
          <h1 className="text-2xl">Blog</h1>
          <div className="border-t p-2 flex justify-end">
            <button
              type="button"
              className="btn btn-accent text-black"
              disabled={!addPostBtn}
            >
              Add Post
            </button>
          </div>

          <div className="grid lg:grid-cols-2">
            <label>Title</label>
            <input
              type="text"
              name="post_title"
              id="post_title"
              className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1"
              value={postTitle}
              onChange={(e) => {
                setPostTitle(e.target.value);
              }}
              placeholder="Enter Title"
            />

            <label>Content</label>
            <textarea
              type="textA+rea"
              name="content"
              id="content"
              rows="5"
              className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="Enter Content"
            ></textarea>

            <label>Project Link</label>
            <input
              type="text"
              name="link"
              id="link"
              className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[97%] p-1 m-1"
              value={postProjectLink}
              onChange={(e) => {
                setPostProjLink(e.target.value);
              }}
              placeholder="Enter Link"
            />

            <label>Photos</label>
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

      {/* ADDING PROJECTS */}
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
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
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

      {/* RESUME */}
        <div className="manage-projects bg-slate-600 p-2 mt-4 rounded-[10px]">
          <h1 className="text-2xl">Resume</h1>
          <div className="border-t p-2 flex flex-col md:flex-row justify-between items-center">
            <input
              type="file"
              name="resume"
              id="resume"
              className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[50%] hover:cursor-pointer p-1 mt-2"
            />
            <span className="text-sm text-green-500 mx-1 w-full md:w-auto"><strong>Uploaded:</strong> resume.pdf</span>
            <button type="button" className="btn btn-accent text-black mt-2 w-full md:w-auto">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
