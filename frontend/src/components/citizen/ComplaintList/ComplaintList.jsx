import "./ComplaintList.css";

import { useEffect, useState } from "react";

import API from "../../../api/complaintApi";

function ComplaintList() {

  const [complaints, setComplaints] =
    useState([]);




  // FETCH COMPLAINTS
  const fetchComplaints = async () => {

    try {

      const response =
        await API.get("/complaints");

      setComplaints(
        response.data.complaints
      );

    } catch (error) {

      console.log(error);

    }

  };



  // LOAD ON PAGE START
  useEffect(() => {

    fetchComplaints();

  }, []);




  return (

    <div className="complaint-list-container">

      <h2>
        Recent Complaints
      </h2>



      {complaints.length === 0 ? (

        <p>
          No complaints found
        </p>

      ) : (

        complaints.map((item) => (

          <div
            className="complaint-card"
            key={item.id}
          >

            <h3>{item.issue}</h3>

            <p>
              Citizen: {item.name}
            </p>

            <p>
              Location: {item.location}
            </p>

            <p>
              {item.description}
            </p>

            <span
              className={`status ${item.status.toLowerCase()}`}
            >

              {item.status}

            </span>

          </div>

        ))

      )}

    </div>
  );
}

export default ComplaintList;