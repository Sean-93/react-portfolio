import React from "react";
import { Link } from 'react-router-dom';

export default function Header(props) {
  
  const header = props.headerInfo.map((item, index) => {
      return (
        
    <div className="container">
    <h1 className="display-4 text-center">{item.fullName}</h1>
    <p className="lead text-center">{item.title} | {item.email}</p>
    </div>

      );
    });
    

  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center">
        
          <thead>
           
          {header}

          </thead>
          <tbody>
          </tbody>
        
      </div>
    </div>
  );
}