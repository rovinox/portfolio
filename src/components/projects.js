import React, { Component } from 'react'
import "./projects.css"
import gif from "../components/gif/myGif.gif"
import {Card, CardTitle,CardText,CardActions,Button } from "react-mdl"
export default class projects extends Component {
  render() {
    return (
     
        
    <div>
      <div className="background">
      <div className="water"></div>
      </div>
      <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", }}>

      <Card shadow={0} style={{width: '400px', height: '320px', marginTop:"20px", borderRadius:"15px"}}>
        <CardTitle expand style={{color: 'red', background: `url(${gif}) center / cover`,}}></CardTitle>
        <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>Github</Button>
        <Button colored>Website</Button>
        </CardActions>
      </Card>
      <Card shadow={0} style={{width: '400px', height: '320px', marginTop:"20px", borderRadius:"15px"}}>
        <CardTitle expand style={{color: '#fff', background: `url(${gif}) center / cover`,}}></CardTitle>
        <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>Github</Button>
        <Button colored>Website</Button>
        </CardActions>
      </Card>
      <Card shadow={0} style={{width: '400px', height: '320px', marginTop:"20px", borderRadius:"15px"}}>
        <CardTitle expand style={{color: '#fff', background: `url(${gif}) center / cover`,}}></CardTitle>
        <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>Github</Button>
        <Button colored>Website</Button>
        </CardActions>
      </Card>
      <Card shadow={0} style={{width: '400px', height: '320px', marginTop:"20px", borderRadius:"15px"}}>
        <CardTitle expand style={{color: '#fff', background: `url(${gif}) center / cover`,}}></CardTitle>
        <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>Github</Button>
        <Button colored>Website</Button>
        </CardActions>
      </Card>
      </div>
      <svg>
      <filter id="turbulence" x="0" y="0" width="1400" height="100%">
      <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
      <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
      <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="60s" 
      keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"/>
      </filter>
      </svg>
  </div>


  
     
    )
  }
}
