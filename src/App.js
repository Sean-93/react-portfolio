
import React from 'react';
import Projects from './components/projects'

const projectList = [
  {
    name: "Password Generator",
    technologies: "Javascript",
    GitHub: "https://github.com/Sean-93/random-password-generator",
    application: "https://sean-93.github.io/random-password-generator"

  },
  {
    name: "Weather Dashboard",
    technologies: "Javascript, JQuery",
    GitHub: "https://github.com/Sean-93/weather-dashboard" ,
    application: "https://sean-93.github.io/weather-dashboard"

  },
  {
    name: "Find Tune",
    technologies: "Javascript",
    GitHub: "https://github.com/justinkellogg89/find-tune" ,
    application: "https://justinkellogg89.github.io/find-tune/"

  },
  {
    name: "Node Readme Generator",
    technologies: "Node.JS",
    GitHub: " https://github.com/Sean-93/node-readme-generator" ,
    application: "video: https://drive.google.com/file/d/1pH7W_hQB0Ij2Ij6LrLVPv9ZkMrBVCcad/view?usp=sharing"

  },
  {
    name: "MySQL Employee Tracker",
    technologies: "Node.JS, MySQL",
    GitHub: " https://github.com/Sean-93/mysql-employee-tracker" ,
    application: "video: https://drive.google.com/file/d/1ZbBHbeEWxy-31YYpLBlV0Xy1x3rceczR/view?usp=sharing"

  },
  {
    name: "Node Express Burger Tracker",
    technologies: "Node, Express, Handlebars",
    GitHub: "https://github.com/Sean-93/node-express-burger-log" ,
    application: "https://murmuring-chamber-35666.herokuapp.com/"

  },
  {
    name: "Checkit",
    technologies: "React, MongoDB, Mongoose",
    GitHub: "https://github.com/Sean-93/checkit" ,
    application: "In development"

  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <Projects projectList={projectList}/>
    </div>
  );
}

export default App;