import React, {Component} from "react";
import Data from './main'
import {Tab, Tabs} from 'react-bootstrap';
class Navigation extends Component{
  render(){
    return(
      <div className="common_container">
        <h1 className="common_heading">Manage Campaigns</h1>
        <Tabs defaultActiveKey="past_campaigns" id="uncontrolled-tab-example">
          <Tab eventKey="up_campaigns" title="Upcoming Campaigns">
            <Data />
          </Tab>
          <Tab eventKey="live_campaigns" title="Live Campaigns">
            <Data />
          </Tab>
          <Tab eventKey="past_campaigns" title="Past Campaigns">
            <Data />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Navigation