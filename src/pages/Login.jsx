import React from "react";
import AuthForm from "../components/AuthForm";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log("Login Data:", data);
    alert("Login successful!");
    navigate("/signup"); 
  };

  return (
    <div className="flex flex-col items-center">
      <AuthForm type="login" onSubmit={handleLogin} />
      <p className="mt-4 text-gray-700">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-indigo-500 font-medium hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
