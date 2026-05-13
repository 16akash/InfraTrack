import "./Login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser }
from "../../services/authService";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };



  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      const data =
        await loginUser(formData);

      // Store token
      localStorage.setItem(
        "token",
        data.token
      );

      // Store user
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response.data.message
      );
    }
  };



  return (

    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        <h2>InfraTrack Login</h2>


        <input
          type="email"
          name="email"
          placeholder="Enter Email"

          value={formData.email}

          onChange={handleChange}
        />


        <input
          type="password"
          name="password"
          placeholder="Enter Password"

          value={formData.password}

          onChange={handleChange}
        />


        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;