import "./Complaints.css";

import ComplaintForm from "../../components/citizen/ComplaintForm/ComplaintForm";

import ComplaintList from "../../components/citizen/ComplaintList/ComplaintList";

function Complaints() {

  return (

    <div className="complaints-page">

      <h1>
        Citizen Complaint Portal
      </h1>

      <ComplaintForm />

      <ComplaintList />

    </div>
  );
}

export default Complaints;