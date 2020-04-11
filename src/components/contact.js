import React from "react";

export default function Contact(props) {
  // const [employeesList, setEmployeesList] = useState(props.employeesList);
  const contact = props.contactInfo.map((item, index) => {
      return (
        <div className="card">
        <div className="card-header">
             Contact Info:
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">{item.fullName}</li>
        <li className="list-group-item">{item.title}</li>
        <li className="list-group-item">{item.email}</li>
        <li className="list-group-item">{item.linkedIn}</li>
        <li className="list-group-item">{item.gitHub}</li>
        <li className="list-group-item">{item.phoneNumber}</li>
        </ul>
        </div>

        
        
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