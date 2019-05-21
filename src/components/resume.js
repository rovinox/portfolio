import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import "./Resume.css"


class Resume extends Component {
  render() {
    return(
      <div>
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>

          <h2>Skills</h2>
              <Skills
                schoolName="Front-End"
                schoolDescription="HTML | CSS | JAVASCRIPT | REACT | REDUX | REACT HOOKS"
              />  
              <Skills
                schoolName="Back-End/Database"
                schoolDescription="NODE.JS | EXPRESS | POSTGRESQL | AWS S3 | AUTHENTICATION "
              />  
              <Skills
                schoolName="Tools"
                schoolDescription="GIT | SSH |  | WEBPACK"
              />

               
          

                 


          <hr style={{borderTop: '3px solid white'}} />

           

               
                

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2014}
              jobtitle="General Manager"
              jobName="Papa John's"
              jobDescription="Supervised up to 10 different employees. coordinate vendor activities. kept track of daily/weekly sales and motivating employees to increase sales."
              />
             <hr style={{borderTop: '3px solid white'}} />

                 <h2>Education</h2>


                <Education
                    
                    startYear={2019}
                     endYear={2019}
                    schoolName="DEVMOUNTAIN - Dallas, TX"
                    schoolDescription="13 weeks Web development bootcamp"
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
