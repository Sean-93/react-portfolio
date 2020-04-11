import React from "react";

export default function Header(props) {
  // const [employeesList, setEmployeesList] = useState(props.employeesList);
  const header = props.headerInfo.map((item, index) => {
      return (
        <tr>
          <td>{item.fullName}</td>
          <td>{item.title}</td>
          <td>{item.email}</td>
          <td>{item.linkedIn}</td>
          <td>{item.gitHub}</td>
          <td>{item.phoneNumber}</td>
        </tr>
      );
    });
    

  return (
    <div>
      <div className="jumbotron">
        
          <thead>
           
          </thead>
          <tbody>
          {header}
          </tbody>
        
      </div>
    </div>
  );
}