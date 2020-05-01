import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const header = props.headerInfo.map((item, index) => {
    return (
      <div className="container">
        <h1 className="display-4 text-center">{item.fullName}</h1>
        <p className="lead text-center">
          {item.title} | {item.email}
        </p>
        <p className="lead text-center">
          <td>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.contactLink}
            >
              {item.contactLink} |{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.projectsLink}
            >
              {item.projectsLink} |{" "}
            </a>
            <a target="_blank" rel="noopener noreferrer" href={item.bioLink}>
              {item.bioLink}
            </a>
          </td>
        </p>
      </div>
    );
  });

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <thead className="container text-center">{header}</thead>
        <tbody></tbody>
      </div>
    </div>
  );
}
