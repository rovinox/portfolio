import React, { Component } from "react";
import "./projects.css";
import turbolog from "../components/gif/turbolog.gif";
import rovinox from "../components/gif/rovinox.gif";
import portfolio from "../components/gif/portfolio.gif";
import amacon from "../components/gif/amacon.gif";
import slack from "../components/gif/slack.gif";
import bootcamp from "../components/gif/Bootcamp.gif";
import BlackCard from "./BlackCard";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";
export default class projects extends Component {
  constructor() {
    super();
    this.state = {
      allCard: [
        {
          image: bootcamp,
          appName: "Bootcamp",
          tool: "payment, mongodb, express, axios, MUI",
          description:
            "It's a platform for students to learn coding, maintain grading, submit homework, pay tuition, and many more functionalities",
          websiteUrl: "",
          githubURL: "https://github.com/rovinox/rovinox-camp",
        },
        {
          image: slack,
          appName: "Slack Clone",
          tool: "React, Redux, Firebase 5, Semantic UI React",
          description:
            "You can create channels and send direct messages. Add emojis to your messages. Upload and display image messages. ",
          websiteUrl: "",
          githubURL: "https://github.com/rovinox/slack-clone.git",
        },
        {
          image: amacon,
          appName: "Amacon",
          tool: "MERN Stack, Stripe API, Cloudinary API, Next.js, JWT, Semantic UI React",
          description:
            "An e-commerce App with Full CRUD Functionality. Server-side Rendering for speed. Attractive + Responsive App Interface.",
          websiteUrl: "",
          githubURL: "https://github.com/rovinox/amacon.git",
        },
        {
          image: turbolog,
          appName: "Turbolog",
          tool: "React, Material-UI, Redux, Node, Express, Bcrypt, google maps API, PostgreSQL",
          description:
            "A app to keeps track of car maintenance history. Also you can find near by car mechanic shop and a forum section to ask any DYI questions.",
          websiteUrl: "",
          githubURL: "https://github.com/turbolog/turbo-log",
        },
        {
          image: rovinox,
          appName: "Rovinox",
          tool: "Styled-components v4 Dynamic CSS-in-JS, React Context API",
          description:
            " Build a Complete CryptoCurrency Financial Reporting App. Date Manipulation and Graphing Historical Price. ",
          websiteUrl: "",
          githubURL: "https://github.com/rovinox/rovinox.git",
        },
        {
          image: portfolio,
          appName: "Portfolio",
          tool: "React MDL material design, React Router v4, Nodemailer",
          description:
            "  I have build my own portfolio from the scratch instead of getting a template. Now i have the perfect portfolio i wanted. ",
          websiteUrl: "",
          githubURL: "https://github.com/rovinox/portfolio.git",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="background-container">
          <img
            className="moon"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
            alt=""
          />
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {this.state.allCard.map((item, index) => (
            <BlackCard  key={index} >
              <Card
               
                shadow={0}
                style={{
                  color: "white",
                  width: "350px",
                  height: "350px",

                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "red",
                    background: `url(${item.image}) center / cover`,
                  }}
                ></CardTitle>
                <CardText style={{ backgroundColor: "black",  padding:10, width: "100%" }}>
                  <h3 style={{ color: "white" }}>{item.appName}</h3>
                  <spam style={{ color: "white" }}> Libraries :  {item.tool}.</spam>
                  <br />
                  <br />
                  <span style={{ color: "white"}}>{item.description}</span>
                </CardText>
                <CardActions style={{ backgroundColor: "black" }}>
                  <Button >
                    <a href={item.githubURL} target="_blank">
                      {" "}
                      Github{" "}
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </BlackCard>
          ))}
        </div>
      </div>
    );
  }
}
