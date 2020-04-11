import React from "react";

export default function Contact(props) {
  // const [employeesList, setEmployeesList] = useState(props.employeesList);
  const contact = props.contactInfo.map((item, index) => {
      return (
        <div class="card" style="width: 18rem;">
        <div class="card-header">
             Contact Info:
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">{item.fullName}</li>
        <li class="list-group-item">{item.title}</li>
        <li class="list-group-item">{item.email}</li>
        <li class="list-group-item">{item.linkedIn}</li>
        <li class="list-group-item">{item.gitHub}</li>
        <li class="list-group-item">{item.phoneNumber}</li>
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