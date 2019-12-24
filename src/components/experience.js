import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobTitle}</h4>
          <h6 style={{marginTop:'0px'}}>{this.props.jobName}</h6>
          {/* <p>{this.props.jobDescription}</p> */}
          <ul>
            <li>Started as a delivery guy and made my way to general manager.</li>
            <li>Gained leadership skill and supervised up to 10 employee.</li>
            <li>Recruited and hired excellent restaurant staﬀ based on attitude and aptitude.</li>
            <li>Excellence Communication skills.</li>
          </ul>

        </Cell>
      </Grid>
    )
  }
}

export default Experience;
