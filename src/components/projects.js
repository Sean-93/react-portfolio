import React from "react";


export default function Projects(props) {
 
  const projects = props.projectList.map((item, index) => {
      return (
        <article className="container">
          <p className="card">
          <p>{item.name}</p>
          <p>{item.technologies}</p>
          <p> <a target="_blank" rel="noopener noreferrer" href={item.GitHub}>{item.GitHub}</a></p>
          <p> <a target="_blank" rel="noopener noreferrer" href={item.application}>{item.application}</a></p>
          </p>
        </article>
      );
    });

  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center">Highlighted Projects:</h1>
          
          {projects}
          
        
      </div>
    </div>
  );
}