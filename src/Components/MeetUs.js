// import React from 'react';
// import './MeetUs.css';

// const MeetUs = () => {
//   return (
//     <>
//     <h1 className="people-title">Meet Our People</h1>
//     <div className="meetus-container">
//     <div>
//         <h2 className="person-name">DOR</h2>
//     </div>
//     <div className="person-intro">
//         <h3 className="person-position">George</h3>
//         <h4 className="person-title">Executive Director/Vice President</h4>
//         <h4 className="person-department">Wealth Management, New York</h4>
//     </div>
//     </div>
//     <div className="people-container">
//     <div>
//         <h2 className="person-name">DOR</h2>
//     </div>
//     <div className="person-intro">
//         <h3 className="person-position">George</h3>
//         <h4 className="person-title">Executive Director/Vice President</h4>
//         <h4 className="person-department">Wealth Management, New York</h4>
//     </div>
//     </div>
//     <div className="people-container">
//     <div>
//         <h2 className="person-name">DOR</h2>
//     </div>
//     <div className="person-intro">
//         <h3 className="person-position">George</h3>
//         <h4 className="person-title">Executive Director/Vice President</h4>
//         <h4 className="person-department">Wealth Management, New York</h4>
//     </div>
//     </div>
//     <div className="people-container">
//     <div>
//         <h2 className="person-name">DOR</h2>
//     </div>
//     <div className="person-intro">
//         <h3 className="person-position">George</h3>
//         <h4 className="person-title">Executive Director/Vice President</h4>
//         <h4 className="person-department">Wealth Management, New York</h4>
//     </div>
//     </div>
//     </>

//   );
// };

// export default MeetUs;


import "./MeetUs.css";
import react, { Component } from "react";
import { ListPeople } from "./ListPeople";
import { Link } from "react-router-dom";
// import Dropdown from "./Dropdown";

class MeetUs extends Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div className="people-item">
        <div className="people-title"><h3>Meet Our People</h3></div>
        {/* <h1 className="navbar-logo"> Austin Partnership's </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}> */}
        <div className="meetus">
          {ListPeople.map((item, index) => {
            return (
                    <div className="meetus-card" key={index}>
                    <div className="meetus-info">
                      <img  src={item.url} className="meetus-img" alt="HeroImg"/>
                      <h4 className="meetus-name">{item.name}</h4>
                      <h5 className="meetus-title">{item.title}</h5>
                      <p className="meetus-location">{item.location}</p>
                      <p className="meetus-mail">{item.mail}</p>
                    </div>
                    </div>
            );
          })}
          </div>
        {/* </ul> */}
      </div>
    );
  }
}

export default MeetUs;
