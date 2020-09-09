import React, {Component} from "react";
import {Table} from 'react-bootstrap';
import data from './data/data.json';
import Popup from './popup';
import img1 from '../img/1.png';
import price from '../img/Price.png';
import csv from '../img/file.png';
import report from '../img/statistics-report.png';
import schedule from '../img/calendar.png';
class Data extends Component{
	state = {
            showHide : false
        };

    handleModalShowHide = () => {
        this.setState({ showHide: !this.state.showHide })
    }
    reschedule = () => {

    }
  render(){
    return(
      <div className="data_container common_container">
      	<Table className="data-table">
		  <thead>
		    <tr>
		      <th>Date</th>
		      <th>Campaign</th>
      		  <th>View</th>
      		  <th colSpan="3">Actions</th>
		    </tr>
		  </thead>
		  <tbody>
		  	{
				data.data.map((game, i) => {
					let createdate = new Date(game.createdOn);
					let camp_date= createdate.toUTCString().split(' ')[2] +" "+ createdate.toUTCString().split(' ')[3] +", "+createdate.toUTCString().split(' ')[1]
					let camp_date_local = createdate.toLocaleDateString("en-US");
					let newDate = new Date();
					let date = newDate.getDate();
					let month = newDate.getMonth() + 1;
					let year = newDate.getFullYear();
					let current_date = `${year}-${month}-${date}`
					console.log(current_date)
					let msdiff= new Date(current_date) - new Date(camp_date_local)
					let daydiff = msdiff / (1000 * 60 * 60 * 24);
					return (
						<tr key={i} onClick={() => this.handleModalShowHide()} >
							<td><span className="camp_date">{camp_date}</span> <br/> <span className="days_ago">{daydiff} Days Ago</span></td>
							<td>
						      	<tr className="internal_table">
						      		<td><img src={img1} className="game" alt="game icon" /></td>
						      		<td className="padding-l10"><span className="gameName">{game.name}</span> <br/> <span className="country_name">{game.region}</span></td>
						      	</tr>
						    </td>
						    <td className="other_text"><img src={price} className="other_img" alt="price icon" /> View Pricing</td>
					        <td className="other_text"><img src={csv} className="other_img csv" alt="csv icon" />CSV</td>
					        <td className="other_text"><img src={report} className="other_img" alt="report icon" />Report</td>
					        <td className="other_text" onClick={() => this.reschedule()}><img src={schedule} className="other_img" alt="schedule icon" />Schedule Again</td>
						</tr>
					);
				})
			}
		    
		      
		      
		      
		  </tbody>
		</Table>
		<Popup isShowModal={this.state.showHide}/>
      </div>
    )
  }
}

export default Data
