import React from 'react';
import './App.css';
import Projects from './components/projects'

const projectList = [
  {
    name: "Password Generator",
    technologies: "Javascript",
    GitHub: "https://github.com/Sean-93/random-password-generator",
    Heroku: ""

  },
  {
    name: "Weather Dashboard",
    technologies: "Javascript, JQuery",
    GitHub: "https://github.com/Sean-93/weather-dashboard" ,
    Heroku: ""

  },
  {
    name: "Find Tune",
    technologies: "Javascript",
    GitHub: "https://github.com/justinkellogg89/find-tune" ,
    Heroku: ""

  },
  {
    name: "Node Readme Generator",
    technologies: "Node.JS",
    GitHub: " https://github.com/Sean-93/node-readme-generator" ,
    Heroku: ""

  },
  {
    name: "MySQL Employee Tracker",
    technologies: "Node.JS, MySQL",
    GitHub: " https://github.com/Sean-93/mysql-employee-tracker" ,
    Heroku: ""

  },
  {
    name: "Node Express Burger Tracker",
    technologies: "Node, Express, Handlebars",
    GitHub: "https://github.com/Sean-93/node-express-burger-log" ,
    Heroku: "https://murmuring-chamber-35666.herokuapp.com/"

  },
  {
    name: "Checkit",
    technologies: "React, MongoDB, Mongoose",
    GitHub: "https://github.com/Sean-93/checkit" ,
    Heroku: ""

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
