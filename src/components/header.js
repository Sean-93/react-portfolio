import React from "react";

export default function Header(props) {
  // const [employeesList, setEmployeesList] = useState(props.employeesList);
  const header = props.headerInfo.map((item, index) => {
      return (
        <tr>
          <td>{item.fullName}</td>
          <br/>
          <td>{item.title}</td>
          <br/>
          <td>{item.email}</td>
          <br/>
        </tr>
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