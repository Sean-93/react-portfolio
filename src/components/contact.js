import React from "react";

export default function Contact(props) {
  // const [employeesList, setEmployeesList] = useState(props.employeesList);
  const contact = props.contactInfo.map((item, index) => {
      return (
        <tr>
          <td>{item.fullName}</td>
          <br/>
          <td>{item.title}</td>
          <br/>
          <td>{item.email}</td>
          <br/>
          <td>{item.linkedIn}</td>
          <br/>
          <td>{item.gitHub}</td>
          <br/>
          <td>{item.phoneNumber}</td>
          <br/>
        </tr>
        
      );
    });
    

  return (
    <div>
      <div className="container-fluid">
        
          <thead>
           
          </thead>
          <tbody>
          {contact}
          </tbody>
        
      </div>
    </div>
  );
}