import React from "react";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import About from "./About";

import Home from './Home';
import Services from "./Services";

function TabsNav() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Home/>
      </Tab>
      <Tab eventKey="profile" title="Services">
        <Services />
      </Tab>
      <Tab eventKey="contact" title="About">
        <About />
      </Tab>
    </Tabs>
  );
}

export default TabsNav;