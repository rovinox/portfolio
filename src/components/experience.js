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
          <h4 style={{marginTop:'0px'}}>{this.props.jobtitle}</h4>
          <h6 style={{marginTop:'0px'}}>{this.props.jobName}</h6>
          {/* <p>{this.props.jobDescription}</p> */}
          <ul>
            <li>Supervised up to 10 employee</li>
            <li>Recruited and hired excellent restaurant staﬀ based on attitude and aptitude</li>
            <li>Continually strive to develop staﬀ in all areas of managerial and professional development</li>
            <li>Excellence Communication skills</li>
          </ul>

        </Cell>
      </Grid>
    )
  }
}

export default Experience;
