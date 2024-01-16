import React from "react";
import "./card.css";
import slack from "../components/gif/slack.gif"
import {Card, CardTitle,CardText,CardActions,Button } from "react-mdl"

export default function BlackCard(props) {
  return (
    <div class="card-container">
      <div class="card">
        {/* <div className="card-picture" >
    <img  src={slack} />
        </div>
        <div className="card-text" >
    <h1>text</h1>

        </div> */}
        {props.children}
        
      </div>

    </div>
  );
}
