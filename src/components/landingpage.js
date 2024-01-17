import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import picture from "./gif/NeajMahmud.jpg";

import "./landingpage.css";

export default function LandingPage() {
  const writeText = `My programming journey began with an attempt to prank a friend
  through the creation of a simulated computer virus, I researched
  and achieved with a few lines of code and no prior coding
  knowledge. This initial foray sparked a deep passion for
  programming, leading me to evolve into a Software Engineer with a
  penchant for crafting complex applications. I thrive on
  collaborative efforts, particularly in pair programming, and enjoy
  working alongside fellow developers. My enthusiasm for technology
  transcends specific frameworks or languages, focusing instead on
  adaptability and leveraging the most effective tools for each
  project. Embracing a continuous learning mindset, I am open to
  mastering any stack that proves optimal for achieving project
  objectives.`;
  return (
    // <div style={{width: '100%', margin: 'auto'}}>

    <Grid className="landing-grid">
      <div className="background-container">
        <img
          className="moon"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <Cell col={12}>
        <img
          src={picture}
          alt="avatar"
          className="avatar-img animated zoomIn "
        />

        <div className="banner-text animated zoomIn	">
          <h1 className="loop animated fadeInRightBig">
            <TextLoop interval={2000}>
              <span>Hi I'm Neaj.</span>
              <span>A full-Stack Software Engineer.</span>
              <span>I Love Coding.</span>
              <span> And Solving Problems.</span>
              <Link to="/contact">
                <button className="loop-btn">Let's Connect</button>
                {/* <span className="loop" >Let's Connect.</span> */}
              </Link>
            </TextLoop>
          </h1>

          {/* <hr/> */}
          <div className="rainbow"></div>
          <p style={{ color: "white" }}>{writeText}</p>

          <div className="social-links">
            {/* LinkedIn */}
            <a
              className="btn animated fadeInUpBig delay-.1s"
              href="https://github.com/rovinox"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github-square"></i>
            </a>

            {/* Github */}
            <a
              className="btn animated fadeInUpBig delay-.1s"
              href="https://www.linkedin.com/in/neaj-mahmud-a35217185/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin "></i>
            </a>
          </div>
        </div>
      </Cell>
    </Grid>
    // </div>
  );
}
