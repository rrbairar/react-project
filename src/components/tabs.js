import React, {Component} from "react";
import Data from './main'
import {Tab, Tabs} from 'react-bootstrap';
class Navigation extends Component{
  render(){
    return(
      <div className="common_container">
        <h1 className="common_heading">Manage Campaigns</h1>
        <Tabs defaultActiveKey="future_campaigns" id="uncontrolled-tab-example">
          <Tab eventKey="future_campaigns" title="Upcoming Campaigns">
              <Data activeTab="future" />
          </Tab>
          <Tab eventKey="present_campaigns" title="Live Campaigns">
              <Data activeTab="present" />
          </Tab>
          <Tab eventKey="past_campaigns" title="Past Campaigns">
              <Data activeTab="past"/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Navigation