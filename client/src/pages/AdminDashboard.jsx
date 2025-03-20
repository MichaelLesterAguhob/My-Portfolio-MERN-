import React, { useContext } from "react";
import { NavLink, Navigate } from "react-router-dom";
import UserContext from "../userContext";

const AdminDashboard = () => {
  const { user } = useContext(UserContext);

  return user._id === null || localStorage.getItem("token") === null ? (
    <Navigate to={"/login/mlca"} />
  ) : (
    <div className="h-[100vh] flex ">
      <div className="bg-slate-700 w-[90%] md:w-[65%] mx-auto p-4 overflow-y-scroll">
        <div className="relative md:flex justify-between border-b border-blue-500 p-4 pt-[85px]">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <NavLink
            to={"/logout"}
            className="absolute md:static top-0 right-0 p-1 bg-red-600 rounded hover:text-xl"
          >
            LogOut
          </NavLink>
        </div>

        <div className="manage-projects bg-slate-600 p-2 h-1/3 mt-4 rounded-[10px]">
          <h1 className="text-2xl">Blog</h1>
          <div className="border-t p-2 flex justify-end">
            <button type="button" className="btn btn-accent text-black">
              Add Post
            </button>
          </div>
          <input type="text" name="title" id="title" className="rounded" />
          <input type="text" name="description" id="description" className="rounded" />
          <input type="text" name="link" id="link" className="rounded" />
          <input type="file" name="photos" id="photos" className="rounded" />
        </div>

        <div className="manage-projects bg-slate-600 p-2 h-1/3 mt-4 rounded-[10px]">
          <h1 className="text-2xl">Project</h1>
          <div className="border-t p-2 flex justify-end">
            <button type="button" className="btn btn-accent text-black">
              Add Project
            </button>
          </div>
        </div>

        <div className="manage-projects bg-slate-600 p-2 h-1/3 mt-4 rounded-[10px]">
          <h1 className="text-2xl">Resume</h1>
          <div className="border-t p-2 flex justify-end">
            <button type="button" className="btn btn-accent text-black">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
