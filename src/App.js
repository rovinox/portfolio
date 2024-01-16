import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            style={{ background: "transparent" }}
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "red",
                  fontSize: "50px",
                  fontFamily: "Alfa Slab One",
                }}
                to="/"
              >
                N M
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link style={{ fontSize: "20px", color: "white" }} to="/projects">
                Projects
              </Link>
              <Link style={{ fontSize: "20px", color: "white" }} to="/contact">
                Contact
              </Link>
            </Navigation>
          </Header>

          <Drawer
            style={{ background: "transparent" }}
          >
            <Navigation>
              <Link style={{ color: "white" }} to="/projects">
                Projects
              </Link>
              <Link style={{ color: "white" }} to="/contact">
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
