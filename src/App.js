import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Perfect Sofa</Link>} scroll>
            <Navigation>
                <Link to="/resume">Sofa Maker</Link>
                <Link to="/aboutme">About Us</Link>
                <Link to="/samples">Sampels</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Perfect Sofa</Link>}>
            <Navigation>
              <Link to="/resume">Sofa Maker</Link>
              <Link to="/aboutme">About Us</Link>
              <Link to="/samples">Samples</Link>
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

export default App;