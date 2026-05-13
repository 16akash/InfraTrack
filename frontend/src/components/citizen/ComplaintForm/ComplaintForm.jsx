import "./ComplaintForm.css";
import API from "../../../api/complaintApi";

import { useState } from "react";

function ComplaintForm() {

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    issue: "",
    description: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await API.post(
      "/complaints",
      formData
    );

    console.log(response.data);

    alert("Complaint Submitted Successfully 🚀");

    setFormData({
      name: "",
      location: "",
      issue: "",
      description: "",
    });

  } catch (error) {

    console.log(error);

    alert("Failed to submit complaint");

  }
};

  return (

    <div className="complaint-form-container">

      <h2>
        Register Complaint
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Village / District"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="issue"
          placeholder="Issue Type"
          value={formData.issue}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Describe your issue"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit Complaint
        </button>

      </form>

    </div>
  );
}

export default ComplaintForm;