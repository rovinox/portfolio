import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p> March {this.props.startYear} - June {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
        <a href="https://github.com/rovinox" rel="noopener noreferrer" target="_blank">
        <h4 style={{marginTop:'0px', color:'white'}}>{this.props.schoolName}</h4>
             </a>
          
          <p>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
