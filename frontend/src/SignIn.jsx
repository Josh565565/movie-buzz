import React from "react";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-white pt-10 pl-10 w-[400px] h-[500px] rounded">
        <p className="text-black">MovieBuzz</p>
        <p className="text-blue-400 text-4xl mt-10">Hello,</p>
        <p className="text-blue-700 text-4xl font-bold">Welcome!</p>

        <form className="mt-10">
          <input
            type="text"
            placeholder="Email"
            className="bg-gray-800 border-b-2 pl-2 border-red-400 w-[300px] h-10 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-800 border-b-2 pl-2 border-red-400 w-[300px] h-10 rounded mt-5"
          />
          <div className="flex justify-between items-center">
            <button className="bg-blue-500 text-white w-[200px] h-10 mt-5">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;