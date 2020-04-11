import React from "react";

export default function Header(props) {
  // const [employeesList, setEmployeesList] = useState(props.employeesList);
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
      <div className="jumbotron jumbotron-fluid">
        
          <thead>
           
          {header}

          </thead>
          <tbody>
          </tbody>
        
      </div>
    </div>
  );
}