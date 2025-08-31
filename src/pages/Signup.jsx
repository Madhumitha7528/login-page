import React from "react";
import AuthForm from "../components/AuthForm";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Data:", data);
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center">
      <AuthForm type="signup" onSubmit={handleSignup} />
      <p className="mt-4 text-gray-700">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-500 font-medium hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
