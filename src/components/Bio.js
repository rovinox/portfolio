import React from 'react'
import { Grid } from 'react-mdl'
import picture from "./gif/NeajMahmud.jpg" 
import "./Bio.css"


export default function Bio() {
    return (
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
            <Grid>
            <img
              src={picture}
              alt="avatar"
              className="avatar-img animated zoomIn "
              />
            </Grid>
                <h1 className="bio-name">Neaj Mahmud</h1>
            
              <p className="bio-list">Profession: Software Engineer </p>  
             
              
              <p className="bio-list">Age: 31</p>
              
             
              <p className="bio-list">Height: 5' 10"</p>
              
              
              <p className="bio-list">Education: Computer Science At HCC </p>
             <footer>
             <a href="https://www.linkedin.com/in/neajmahmud/"><i className="linkedin-icon fab fa-linkedin"></i></a>    
              <a href="https://www.instagram.com/robin_the_uno/"><i className=" ig-icon fab fa-instagram"></i></a>  
              <a href="https://www.facebook.com/R0131N"><i className="face-icon fab fa-facebook-square"></i></a> 
             </footer>

        </div>
    )
}
