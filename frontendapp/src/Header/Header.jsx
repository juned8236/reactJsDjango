import "./Header.css";
import React from "react";
import { Layout, Menu } from 'antd';
import Relation from '../Relation/index';
import Redux1 from '../Redux1/index';
import Home from '../Home/index';
import { Link, HashRouter, Route } from 'react-router-dom';


// variables to override above
function template() {
  const { SubMenu } = Menu;
  const { Header } = Layout;

  return (
    <div className="header">

    <Layout className="layout">

    <HashRouter>
        <Menu   theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}>

          <Menu.Item key="1">
              <Link to='/home' >Home</Link>
          </Menu.Item>

          <Menu.Item key="2">
              <Link to='/Redux1'  >Redux Library</Link>

          </Menu.Item>

          <Menu.Item key="4">
              <Link to='/Relation'>ORM & Relationship M:1</Link>
          </Menu.Item>
          

        </Menu>

        <Route path='/' exact component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/Redux1' component={Redux1} />
                <Route path='/Relation' component={Relation} />
                </HashRouter>
    </Layout>
    </div>


  );
};

export default template;
