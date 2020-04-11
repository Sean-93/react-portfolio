import React from "react";

export default function Projects(props) {
  // const [employeesList, setEmployeesList] = useState(props.employeesList);
  const projects = props.projectList.map((item, index) => {
      return (
        <tr>
          <th scope="row">{index+1}</th>
          <td>{item.name}</td>
          <td>{item.technologies}</td>
          <td>{item.GitHub}</td>
          <td>{item.application}</td>
        </tr>
      );
    });
    

  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center">Highlighted Projects:</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name:</th>
              <th scope="col">Technologies:</th>
              <th scope="col">GitHub Link:</th>
              <th scope="col">Application Link:</th>
              
            </tr>
          </thead>
          <tbody>
          {projects}
          </tbody>
        </table>
      </div>
    </div>
  );
}