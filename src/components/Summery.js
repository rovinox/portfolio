import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Summery extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear}  {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <ui>
              <li>Experience with MERN (MongoDB, Express.js, React.js, Node.js) stack development and worked with NPM modules.</li>
              <br></br>

              <li>Developed all client-side logical implementation part of applications with  JavaScript modules patterns to manipulate nodes in DOM tree.</li>
              <br></br>

              <li>Prioritized and solved the issues using issue tracking tools like JIRA and expertise
                  in version control system(GIT).</li>
              <br></br>

              <li>Experience working on the complete SDLC including creating, design, documentation, development and unit testing of applications. </li>
              <br></br>
              <li>Self-motivated, easily adaptable to new environments and the ability to work independently as well as in groups. </li>
              <br></br>

              <li>Hands on expertise in developing the Single Page Applications (SPAs) using React.js and Model View Controller (MVC) frameworks such as NodeJS/Express. </li>
              <br></br>

              <li>Hands on experience with Object-Oriented JavaScript. Good understanding of OOP Concepts and prototypes. </li>
              <br></br>

              <li>Motivated to produce performant and robust software; highly passionate about programming.</li>
              <br></br>
              
              <li>Sharp eye for details and ability to spot and deviations, abnormalities, and anomalies. </li>

          </ui>
        </Cell>
      </Grid>
    )
  }
}

export default Summery;
