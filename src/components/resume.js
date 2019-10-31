import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Summery from "./Summery"
import {Link} from "react-router-dom"



class Resume extends Component {
  render() {
    return(
     
        
        <Grid>
          
          <Cell col={4}>
            

            <h2 style={{paddingTop: '2em'}}>Neaj Mahmud</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            
            <p>It all started when I wanted to prank my friend by creating a fake virus on his computer. After doing some research, I can say my mission was accomplished (in a few lines of code) without knowing any coding. Instantly I fell in love with programming. Now I'm a full-stack developer. Passionate about creating complex applications.  Also, I like pair programming and collaborating with other developers.</p>
            
            <h5>Location</h5>
            <p>Connecticut</p>
            
            
            

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

            <h2>Experience</h2>
              <Experience
              jobTitle="General Manager"
              jobName="Papa john's Pizza"
              startYear={2012}
              endYear={2018}
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
      
    )
  }
}

export default Resume;
