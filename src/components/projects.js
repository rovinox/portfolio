import React, { Component } from 'react'
import "./projects.css"
import turbolog from "../components/gif/turbolog.gif"
import rovinox from "../components/gif/rovinox.gif"
import portfolio from "../components/gif/portfolio.gif"
import amacon from "../components/gif/amacon.gif"
import slack from "../components/gif/slack.gif"
import {Card, CardTitle,CardText,CardActions,Button } from "react-mdl"
export default class projects extends Component {
  render() {
    return (
     
        
    <div>
      <div className="background">
      <div className="water"></div>
      </div>
      <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", }}>

      <Card shadow={0} style={{width: '400px', height: '450px', marginTop:"20px", borderRadius:"15px", textAlign:"center"}}>
        <CardTitle expand style={{color: 'red', background: `url(${slack}) center / cover`,}}></CardTitle>
        <CardText >
            <h4>Clone Slack</h4>
            <b>React, Redux, Firebase 5, Semantic UI React</b>
            <br/>
            You can create channels and send direct messages. Add emojis to your messages. Upload and display image messages.  
       
        </CardText>
        <CardActions border>
        <Button colored><a href="https://slack-clone-99f27.firebaseapp.com" target="_blank">Website</a></Button>
        <Button colored><a href="https://github.com/rovinox/slack-clone.git" target="_blank">github</a></Button>
        </CardActions>
      </Card>
      <Card shadow={0} style={{width: '400px', height: '450px', marginTop:"20px", borderRadius:"15px", textAlign:"center"}}>
        <CardTitle expand style={{color: 'red', background: `url(${amacon}) center / cover`,}}></CardTitle>
        <CardText >
            <h4>Amacon</h4>
            <b>MERN Stack, Stripe API, Cloudinary API, Next.js, JWT, Semantic UI React</b>
            <br/>
            An e-commerce App with Full CRUD Functionality. Server-side Rendering for speed. Attractive + Responsive App Interface.
       
        </CardText>
        <CardActions border>
        <Button colored><a href="https://amacon.now.sh/" target="_blank">Website</a></Button>
        <Button colored><a href="https://github.com/rovinox/amacon.git" target="_blank">github</a></Button>
        </CardActions>
      </Card>
      <Card shadow={0} style={{width: '400px', height: '450px', marginTop:"20px", borderRadius:"15px", textAlign:"center"}}>
        <CardTitle expand style={{color: 'red', background: `url(${turbolog}) center / cover`,}}></CardTitle>
        <CardText >
            <h4>Turbolog</h4>
            <b>React, Material-UI, Redux, Node, Express, Bcrypt, google maps API, PostgreSQL</b>
            <br/>
                A app to keeps track of car maintenance history. Also you can find near by car mechanic shop and a forum section to ask any DYI questions.
       
        </CardText>
        <CardActions border>
        <Button colored><a href="http://turbolog.xyz/#/" target="_blank">Website</a></Button>
        <Button colored><a href="https://github.com/turbolog/turbo-log" target="_blank">github</a></Button>
        </CardActions>
      </Card>
      <Card shadow={0} style={{width: '400px', height: '450px', marginTop:"20px", borderRadius:"15px", textAlign:"center"}}>
        <CardTitle expand style={{color: 'red', background: `url(${rovinox}) center / cover`,}}></CardTitle>
        <CardText >
            <h4>Rovinox</h4>
            <b>Styled-components v4 Dynamic CSS-in-JS, React Context API</b>
            <br/>
            Build a Complete CryptoCurrency Financial Reporting App. Date Manipulation and Graphing Historical Price. 
       
        </CardText>
        <CardActions border>
        <Button colored><a href="http://rovinox.xyz/" target="_blank">Website</a></Button>
        <Button colored><a href="https://github.com/rovinox/rovinox.git" target="_blank">github</a></Button>
        </CardActions>
      </Card>
      <Card shadow={0} style={{width: '400px', height: '450px', marginTop:"20px", borderRadius:"15px", textAlign:"center"}}>
        <CardTitle expand style={{color: 'red', background: `url(${portfolio}) center / cover`,}}></CardTitle>
        <CardText >
            <h4>Portfolio</h4>
            <b>React MDL material design, React Router v4, Nodemailer</b>
            <br/>
            I have build my own portfolio from the scratch instead of getting a template. Now i have the perfect portfolio i wanted. 
       
        </CardText>
        <CardActions border>
        <Button colored><a href="https://neajmahmud.dev/" target="_blank">Website</a></Button>
        <Button colored><a href="https://github.com/rovinox/portfolio.git" target="_blank">github</a></Button>
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
