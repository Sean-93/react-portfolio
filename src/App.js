import React from "react";
import Projects from "./components/projects";
import Header from "./components/header";
import Bio from "./components/bio";
import Contact from "./components/contact";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; //add link in later <==

const projectList = [
  {
    name: "Checkit (in development)",
    technologies: "React, Node, Express, MongoDB, Mongoose",
    GitHub: "https://github.com/Sean-93/checkit",
    application: "https://secret-cliffs-11777.herokuapp.com/",
  },
  {
    name: "Weather Dashboard",
    technologies: "Javascript, JQuery, Bootstrap",
    GitHub: "https://github.com/Sean-93/weather-dashboard",
    application: "https://sean-93.github.io/weather-dashboard",
  },
  {
    name: "Find Tune",
    technologies: "Javascript, Bulma",
    GitHub: "https://github.com/justinkellogg89/find-tune",
    application: "https://justinkellogg89.github.io/find-tune/",
  },
  {
    name: "Node Readme Generator",
    technologies: "Node.Js",
    GitHub: " https://github.com/Sean-93/node-readme-generator",
    application:
      "video: https://drive.google.com/file/d/1pH7W_hQB0Ij2Ij6LrLVPv9ZkMrBVCcad/view?usp=sharing",
  },
  {
    name: "MySQL Employee Tracker",
    technologies: "Node.Js, MySQL",
    GitHub: " https://github.com/Sean-93/mysql-employee-tracker",
    application:
      "video: https://drive.google.com/file/d/1ZbBHbeEWxy-31YYpLBlV0Xy1x3rceczR/view?usp=sharing",
  },
  {
    name: "Node Express Burger Tracker",
    technologies: "Node.Js, Express, Handlebars",
    GitHub: "https://github.com/Sean-93/node-express-burger-log",
    application: "https://murmuring-chamber-35666.herokuapp.com/",
  },
  {
    name: "Password Generator",
    technologies: "Javascript",
    GitHub: "https://github.com/Sean-93/random-password-generator",
    application: "https://sean-93.github.io/random-password-generator",
  },
  {
    name: "Workday Scheduler",
    technologies: "Javascript, JQuery, Bootstrap",
    GitHub: "https://github.com/Sean-93/Work-Day-Scheduler",
    application: "https://sean-93.github.io/Work-Day-Scheduler/",
  },
];

const contactInfo = [
  {
    fullName: "Sean Rooney",
    title: "Full-Stack Developer",
    email: "Seandanielrooney@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sean-d-rooney",
    gitHub: "https://github.com/Sean-93",
    phoneNumber: "480-410-2388",
  },
];

const headerInfo = [
  {
    fullName: "Sean Rooney",
    title: "Full-Stack Developer",
    email: "Seandanielrooney@gmail.com",
  },
];

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Header headerInfo={headerInfo} />
      </header>
        <Switch>
          <Route exact path="/">
            <Bio />
          </Route>
          <Route exact path="/projects">
            <Projects projectList={projectList} />
          </Route>
          <Route exact path="/contact">
          <Contact contactInfo={contactInfo} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
