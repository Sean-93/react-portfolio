import React from "react";
import { Link } from 'react-router-dom';

export default function Header(props) {
  
  const header = props.headerInfo.map((item, index) => {
      return (
        
    <div className="container">
    <h1 className="display-4 text-center">{item.fullName}</h1>
    <p className="lead text-center">{item.title} | {item.email}</p>
    <p className="button">

    <Link to="/contact">Contact</Link>{" | "}
    <Link to="/projects">Projects</Link>{" | "}
    <Link to="/bio">Main</Link>

    </p>
    </div>

      );
    });
    
    



  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        
          <thead className="container text-center">
           
          {header}

          </thead>
          <tbody>
          </tbody>
        
      </div>
    </div>
  );
}