import React from "react";
import { Link } from 'react-router-dom';

export default function bio() {
  return (
    <div className="container">
      <div className="card-header"><img className="img-responsive position-left" src="../public/assets/portfolio-pic.png" alt="portfolio-picture"/>
      <ul />
        My name is Sean, and I am a web developer from Tempe, Arizona. I have
        worked on projects that include HTML, CSS, and Javascript as well as
        JQuery, Node.Js with Express, and React. I also have experience with
        database technologies like MySQL, MongoDB, as well as the Mongoose and
        Sequelize libraries. I love to learn and am always working on something
        and looking for new projects.
        <ul />
        Please feel free to{" "}<Link to="/contact">contact me</Link>{" "}for inquiries and more info.
        <ul />
        You can also check out my past projects{" "}<Link to="/projects">here</Link>{" "}if you want to see what I've been working on.
      
      </div>
      
        
      
    </div>
  );
}
