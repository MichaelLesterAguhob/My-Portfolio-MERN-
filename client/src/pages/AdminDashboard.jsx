import React, { useContext} from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../userContext";

import BlogPost from "../components/adminDashboard/BlogPost";
import Project from "../components/adminDashboard/Project";
import ResumeUpload from "../components/adminDashboard/ResumeUpload";

const AdminDashboard = () => {
  const { user } = useContext(UserContext);

  return user._id === null || localStorage.getItem("token") === null ? (
    <Navigate to={"/login/mlca"} />
  ) : (
    <div className="h-[100vh] flex ">
      <div className="bg-slate-700 w-[90%] md:w-[65%] mx-auto p-4 overflow-y-scroll">

        <div className="relative md:flex justify-between border-b border-blue-500 p-4 pt-[85px]">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        {/* ADDING BLOG POST */}
        <BlogPost />

        {/* ADDING PROJECTS */}
        <Project />

        {/* RESUME */}
        <ResumeUpload />

      </div>
    </div>
  );
};

export default AdminDashboard;
