import React from "react";

export default function Projects(props) {
  // const [employeesList, setEmployeesList] = useState(props.employeesList);
  const employee = props.projectList.map((item, index) => {
      return (
        <tr>
          <th scope="row">{index+1}</th>
          <td>{item.name}</td>
          <td>{item.technologies}</td>
          <td>{item.GitHub}</td>
          <td>{item.Heroku}</td>
        </tr>
      );
    });
    
  
console.log("employee Render");
  return (
    <div>
      <div className="container-fluid">
        <h1>Highlighted Projects:</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name:</th>
              <th scope="col">Technologies:</th>
              <th scope="col">GitHub Link:</th>
              <th scope="col">Heroku Link:</th>
              
            </tr>
          </thead>
          <tbody>
          {employee}
          </tbody>
        </table>
      </div>
    </div>
  );
}