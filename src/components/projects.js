import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./projects.css"


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card  shadow={5} style={{minWidth: '450', margin: ' 30px auto',borderRadius: "10px"}}>
            <CardTitle style={{ height: '176px', background: 'url(https://rovinox3.s3.amazonaws.com/bucketFolder/1558990399545-lg.png) center / cover'}} >
            </CardTitle>
            <CardText>
               <h2>Rovinox</h2>
              <h5>An ecommerce site to buy or sell new or used household items</h5>
              <ul>
                <li>Bcript.js to secure user login credentials and PostgreSQL to store them  </li>
                <li>Aws s3 to store uploaded files </li>
                <li>React and redux in the front-end to work with data </li>
                <li>Stripe API to accept payment from user </li>
                

              </ul>
              
            </CardText>
            <CardActions border className="Card-Actions">
            
             <a href="https://github.com/rovinox" rel="noopener noreferrer" target="_blank">
             <button className="btn-project" >GitHub</button>
             </a>
             
             <a href="https://rovinox.xyz" rel="noopener noreferrer" target="_blank">
             <button className="btn-project">Website</button>
             </a> 
             
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              
            </CardMenu>
          </Card>

          {/* Project 2 */}
          {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
             
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              
            </CardMenu>
          </Card> */}

          
          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs> */}


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
