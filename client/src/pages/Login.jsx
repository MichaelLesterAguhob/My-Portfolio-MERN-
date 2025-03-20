import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../userContext";

const Login = () => {
  const [username, setUname] = useState("");
  const [password, setPass] = useState("");
  const [showPassword, setShowPass] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const toggleShowPass = () => {
    setShowPass(!showPassword);
  };

  // useEffect(() => {}, [username, password]);

  const login = async (e) => {
    try {
      e.preventDefault();

      let loginResponse = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: username,
            password: password,
          }),
        }
      );

      if (!loginResponse.ok) {
        let respo = await loginResponse.json();

        if (respo.success === false) {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: respo.message,
            timer: 2000,
          });
          return;
        }
      }

      let respo = await loginResponse.json();
      if (respo) {
        if (respo.access) {
          localStorage.setItem("token", respo.access);
          Swal.fire({
            icon: "success",
            title: "Login Success",
            timer: 2000,
          });
          getUserDetails();
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error: " + error,
      });
    }
  };

  const getUserDetails = async () => {
    try {
      const getUserDetailsResponse = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/getUserDetails`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!getUserDetailsResponse.ok) {
        let respo = await getUserDetailsResponse.json();
        Swal.fire({
          icon: 'error',
          title: 'Getting user details failed',
          text: respo.message,
          timer: 3000
        })
        return; 
      }

      let respo = await getUserDetailsResponse.json();
      if(respo) {
        setUser({
          id: respo.user._id
        })
        console.log(respo.user._id);
      }

    } catch (error) {
      console.log(error)
    }
  };

  return user.id !== null && localStorage.getItem("token") !== null ? (
    <Navigate to="/admin-dashboard" />
  ) : (
    <div id="main" className="min-h-[95vh] mt-[73px] bg-slate-700 p-2 flex">
      <form
        onSubmit={(e) => {
          login(e);
        }}
        id="login-form "
        className="h-[80vh] md:w-3/4 min-w-[300px] max-w-[500px] m-auto rounded-lg flex flex-col justify-start items-center  bg-slate-100"
      >
        <h1 className="text-3xl p-4 text-center text-black font-bold mt-8">
          LOGIN
        </h1>

        <label htmlFor="username" className="text-gray-700 mt-[60px] w-[95%]">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="h-[60px] w-[95%] p-1 rounded-md bg-slate-300 text-gray-700 font-bold text-xl"
          value={username}
          onChange={(e) => setUname(e.target.value)}
          placeholder="Enter your username"
          required
        />
        <label htmlFor="password" className="text-gray-700 w-[95%] mt-[40px]">
          Password
        </label>
        <input
          type={`${showPassword ? "text" : "password"}`}
          name="password"
          id="password"
          className="h-[60px] w-[95%] p-1 rounded-md bg-slate-300 text-gray-700 font-bold text-xl"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <button
          type="button"
          className="text-blue-600 hover:underline w-[95%] text-right pr-2 mt-2"
          onClick={toggleShowPass}
        >
          {showPassword ? "Hide" : "Show"} Password
        </button>

        <button
          className="btn mt-[50px] w-[95%] text-xl h-[50px] bg-blue-700"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
