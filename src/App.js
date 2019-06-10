import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link, withRouter} from 'react-router-dom';

class App extends Component {
  render() {
   
    return (
      <div className="demo-big-content">
    <Layout>
    <Header style={{background:this.props.location.pathname === "/" ||this.props.location.pathname === "/contact"? "transparent":"black"}}className="header-color" title={<Link style={{textDecoration: 'none', color: '#2DBFCB',fontSize:"50px",fontFamily: 'Alfa Slab One'}} to="/">N M</Link>} scroll>
           
            <Navigation>

                <Link style={{ fontSize:"20px" , color: 'aqua'}} to="/resume">Resume</Link>
                <Link style={{fontSize:"20px", color: 'aqua'}} to="/projects">Projects</Link>
                <Link style={{fontSize:"20px", color: 'aqua'}} to="/contact">Contact</Link>
            </Navigation>
        </Header>
      
        
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Neaj Mahmud</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default withRouter(App);
