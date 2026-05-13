import "./ProjectTable.css";

function ProjectTable() {

  const projects = [

    {
      id: 1,
      name: "NH-27 Highway Expansion",
      district: "Patna",
      budget: "₹12 Cr",
      status: "Active",
      deadline: "12 Dec 2026",
    },

    {
      id: 2,
      name: "Canal Modernization",
      district: "Buxar",
      budget: "₹5 Cr",
      status: "Delayed",
      deadline: "05 Jan 2027",
    },

    {
      id: 3,
      name: "Village Water Pipeline",
      district: "Gaya",
      budget: "₹2 Cr",
      status: "Completed",
      deadline: "20 Oct 2026",
    },

  ];



  return (

    <div className="project-table-container">

      <h2>
        Ongoing Infrastructure Projects
      </h2>


      <table className="project-table">

        <thead>

          <tr>

            <th>Project</th>

            <th>District</th>

            <th>Budget</th>

            <th>Status</th>

            <th>Deadline</th>

          </tr>

        </thead>



        <tbody>

          {projects.map((project) => (

            <tr key={project.id}>

              <td>{project.name}</td>

              <td>{project.district}</td>

              <td>{project.budget}</td>

              <td>

                <span
                  className={`status ${project.status.toLowerCase()}`}
                >

                  {project.status}

                </span>

              </td>

              <td>{project.deadline}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ProjectTable;