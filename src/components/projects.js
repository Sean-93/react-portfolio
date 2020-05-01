import React from "react";


export default function Projects(props) {
 
  const projects = props.projectList.map((item, index) => {
      return (
        <article className="container">
          {/* <th scope="row">{index+1}</th> */}
          <p className="card">
          <li>{item.name}</li>
          <li>{item.technologies}</li>
          <li> <a target="_blank" rel="noopener noreferrer" href={item.gitHub}>{item.gitHub}</a></li>
          <li> <a target="_blank" rel="noopener noreferrer" href={item.application}>{item.application}</a></li>
          </p>
        </article>
      );
    });

  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center">Highlighted Projects:</h1>
        {/* <table className="table table-dark">
          <thead>
            <tr>
              
              <th scope="col">Name:</th>
              <th scope="col">Technologies:</th>
              <th scope="col">GitHub Link:</th>
              <th scope="col">Application Link:</th>
              
            </tr>
          </thead> */}
          
          {projects}
          
        
      </div>
    </div>
  );
}