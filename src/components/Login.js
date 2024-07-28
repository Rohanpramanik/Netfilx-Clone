import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_medium.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute w-4/12 p-10 my-36 mx-auto left-0 right-0 text-white bg-black rounded-md bg-opacity-80">
        <div className="text-2xl font-bold my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </div>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 my-2 bg-gray-700 rounded-md bg-opacity-60"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-3 my-2 bg-gray-700 rounded-md bg-opacity-60"
        />
        <input
          type="Password"
          placeholder="Password"
          className="w-full p-3 my-2 bg-gray-700 rounded-md bg-opacity-60"
        />
        <button
          type="submit"
          placeholder="Sign In"
          className="w-full p-3 my-4 bg-red-700 rounded-md"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm py-4 cursor-pointer" onClick={toggleSignUpForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
