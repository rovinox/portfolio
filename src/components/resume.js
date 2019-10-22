import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Summery from "./Summery"
import {Link} from "react-router-dom"
import "./Resume.css"


class Resume extends Component {
  render() {
    return(
      <div className="resume-cp">
        
        <Grid>
          
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              {/* <img
                src="https://rovinox3.s3.amazonaws.com/bucketFolder/1557503584256-lg.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 /> */}
            </div>

            <h2 style={{paddingTop: '2em'}}>Neaj Mahmud</h2>
            <h4 style={{color: 'grey'}}>Web Devoloper</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>It all started when I wanted to prank my friend by creating a fake virus on his computer. After doing some research, I can say my mission was accomplished (in a few lines of code) without knowing any coding. Instantly I fell in love with programming. Now I'm a full-stack developer. Passionate about creating complex applications.  Also, I like pair programming and collaborating with other developers.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>Connecticut</p>
            <h5>Phone</h5>
            <p>(203) 979-8936</p>
            <h5>Email</h5>
            <p>neajmahmud230@gmail.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            <Link to="/contact">
              <button className="loop-btn">Let's Connect</button>
            </Link>
            
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <h2>Summary</h2>
            <Summery/>

            <hr style={{borderTop: '3px solid white'}} />
              <h2>Skills</h2>
              <Skills
                schoolName="Front-End"
                schoolDescription="HTML | CSS | JAVASCRIPT | REACT | REDUX | REACT HOOKS"
              />  
              <Skills
                schoolName="Back-End/Database"
                schoolDescription="NODE.JS | EXPRESS | POSTGRESQL | AWS S3 | MongoDB|AUTHENTICATION "
              />  
              <Skills
                schoolName="Tools"
                schoolDescription="GIT | SSH "
              />

               
          

                 


          <hr style={{borderTop: '3px solid white'}} />

           

               
                

              

                 <h2>Education</h2>


                <Education
                    
                    startYear="March 2019 "
                     endYear="- June 2019"
                    schoolName="DEVMOUNTAIN - Dallas, TX"
                    schoolDescription="13 weeks Web development bootcamp"
                />
                <Education
                    
                    startYear="Oct 2012 "
                     endYear="- Mar 2014"
                    schooltitle="Housatonic Community College - Bridgeport, CT"
                    schoolDescription="Computer Science"
                />
              
              {/* <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      /> */}


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
