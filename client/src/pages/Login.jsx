import React from "react";

const Login = () => {
  return (
    <div
      id="main"
      className="min-h-[95vh] mt-[73px] bg-slate-700 p-2 flex"
    >
      <form
        id="login-form "
        className="h-[80vh] border-2 md:w-3/4 min-w-[300px] max-w-[500px] m-auto rounded-lg flex flex-col justify-start items-center gap-5"
      >
        <h1 className="text-2xl p-4 text-center mt-8">LOGIN</h1>


        <input
          type="text"
          name="username"
          id="username"
          className="h-[60px] w-[95%] p-1 rounded-md mt-[80px] bg-slate-300 text-black font-bold text-xl"
          placeholder="Enter your username"
        />
        <input
          type="password"
          name="password"
          id="password"
          className="h-[60px] w-[95%] p-1 rounded-md bg-slate-300 text-black font-bold text-xl"
          placeholder="Enter your password"
        />

        <button className="btn mt-[50px] w-1/2 text-xl h-[50px]" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
