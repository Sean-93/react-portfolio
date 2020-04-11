import React from "react";

export default function Header(props) {
  // const [employeesList, setEmployeesList] = useState(props.employeesList);
  const header = props.headerInfo.map((item, index) => {
      return (
        
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <h1 className="display-4">{item.fullName}</h1>
    <p className="lead">{item.title} | {item.email}</p>
    </div>
    </div>

      );
    });
    

  return (
    <div>
      <div className="jumbotron">
        
          <thead>
           
          {header}

          </thead>
          <tbody>
          </tbody>
        
      </div>
    </div>
  );
}