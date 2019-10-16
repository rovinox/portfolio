import React, { Component } from 'react'
import "./projects.css"
import turbolog from "../components/gif/turbolog.gif"
import {Card, CardTitle,CardText,CardActions,Button } from "react-mdl"
export default class projects extends Component {
  render() {
    return (
     
        
    <div>
      <div className="background">
      <div className="water"></div>
      </div>
      <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", }}>

      <Card shadow={0} style={{width: '500px', height: '500px', marginTop:"20px", borderRadius:"15px", textAlign:"center"}}>
        <CardTitle expand style={{color: 'red', background: `url(${turbolog}) center / cover`,}}></CardTitle>
        <CardText >
            <h4>Turbolog</h4>
            <b>React, Material-UI, Redux, Node, Express, Bcrypt, google maps API</b>
            <br/>
                A app to keeps track of car maintenance history. Also you can find near by car mechanic shop and a forum section to ask any DYI qustion.
       
        </CardText>
        <CardActions border>
        <Button colored><a href="http://turbolog.xyz/#/" target="_blank">Website</a></Button>
        <Button colored><a href="https://github.com/turbolog/turbo-log" target="_blank">github</a></Button>
        </CardActions>
      </Card>
      <Card shadow={0} style={{width: '400px', height: '400px', marginTop:"20px", borderRadius:"15px"}}>
        <CardTitle expand style={{color: '#fff', background: `url(${turbolog}) center / cover`,}}></CardTitle>
        <CardText>
          
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
        <Button colored>Github</Button>
        <Button colored>Website</Button>
        </CardActions>
      </Card>
      <Card shadow={0} style={{width: '400px', height: '400px', marginTop:"20px", borderRadius:"15px"}}>
        <CardTitle expand style={{color: '#fff', background: `url(${turbolog}) center / cover`,}}></CardTitle>
        <CardText>
          
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        </CardText>
        <CardActions border>
       
        </CardActions>
      </Card>
      <Card shadow={0} style={{width: '500px', height: '500px', marginTop:"20px", borderRadius:"15px"}}>
        <CardTitle expand style={{color: '#fff', background: `url(${turbolog}) center / cover`,}}></CardTitle>
        <CardText>
          
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
