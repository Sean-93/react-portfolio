import React from "react";


export default function Projects(props) {
 
  const projects = props.projectList.map((item, index) => {
      return (
        <tr className="card m-1">
          <th scope="row">{index+1}</th>
          <td>{item.name}</td>
          <td>{item.technologies}</td>
          <td> <a target="_blank" rel="noopener noreferrer" href={item.gitHub}>{item.gitHub}</a></td>
          <td> <a target="_blank" rel="noopener noreferrer" href={item.application}>{item.application}</a></td>
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