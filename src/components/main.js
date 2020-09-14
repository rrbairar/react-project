import React, {Component} from "react";
import {Table} from 'react-bootstrap';
import data from './data/data.json';
import Popup from './popup';
import img1 from '../img/1.png';
import price from '../img/Price.png';
import csv from '../img/file.png';
import report from '../img/statistics-report.png';
import schedule from '../img/calendar.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Data extends Component{
    constructor(props) {
	    super(props);
	    this.state = {
	    	showHide : false,
            appName : '',
            appCountry: '',
            startDate: new Date()
	    };
	  }

    handleModalShowHide = (e) => {
    	const gameText = e.target.dataset.app;
    	const country = e.target.dataset.country;
    	const img = e.target.dataset.img;
        this.setState({ showHide: !this.state.showHide,
        appName: gameText,
        appCountry: country,
    	appImg: img})
    }
    handleChange = (date) => {
    	this.setState({
      		startDate: date
    	});
 	 }
    toggleDatePicker = () => {
	  this.setState(prevState => ({
	    openDatePicker: !prevState.openDatePicker
	  }));
	};
  render(){
  	let props = {
  		isShowModal: this.state.showHide,
  		isGameName: this.state.appName,
  		appCountry: this.state.appCountry,
  		appImg: this.state.appImg
  		}
    return(
      <div className="data_container common_container">
      	<Table className="data-table" responsive>
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
					let msdiff= new Date(current_date) - new Date(camp_date_local)
					let daydiff = Math.ceil(msdiff / (1000 * 60 * 60 * 24));
					const present = daydiff ===0;
				    const past = daydiff > 0;
				    const future = daydiff < 0;
				    if(this.props.activeTab =="future" && future){
					return (
						<tr key={i} >
							<td><span className="camp_date">{camp_date}</span> <br/> <span className="days_ago">{daydiff} Days Ago</span></td>
							<td>
						      	<tr className="internal_table">
						      		<td className=""><img src={require('../img/'+ (i+1) +'.png')} className="game" alt="game icon" /></td>
						      		<td className="padding-l10"><span className="gameName">{game.name}</span> <br/> <span className="country_name">{game.region}</span></td>
						      	</tr>
						    </td>
						    <td className="other_text cursor" key={i} onClick={(e) => this.handleModalShowHide(e)}  data-app={game.name} data-country={game.region} data-img={require('../img/'+ (i+1) +'.png')}><img src={price} className="other_img cursor" alt="price icon"/> View Pricing</td>
					        <td className="other_text "><img src={csv} className="other_img csv" alt="csv icon" /><a className="link" href="https://www.google.com">CSV</a></td>
					        <td className="other_text "><img src={report} className="other_img" alt="report icon" /><a className="link" href="https://www.google.com">Report</a></td>
					        <td className="other_text " onClick={() => this.toggleDatePicker}>
					        <label className="cursor">
					        <DatePicker
					           name={'date_pick'+i}
					           selected={this.state.startDate}
							   open={this.state.openDatePicker}
							   onOpenChange={this.datePickerStatus}
							   onChange={this.handleChange}
							/><img src={schedule} className="other_img cursor" alt="schedule icon" /> Schedule Again</label></td>
						</tr>
					);
				}
				else if(this.props.activeTab =="present" && present){
					return (
						<tr key={i} >
							<td><span className="camp_date">{camp_date}</span> <br/> <span className="days_ago">{daydiff} Days Ago</span></td>
							<td>
						      	<tr className="internal_table">
						      		<td className=""><img src={require('../img/'+ (i+1) +'.png')} className="game" alt="game icon" /></td>
						      		<td className="padding-l10"><span className="gameName">{game.name}</span> <br/> <span className="country_name">{game.region}</span></td>
						      	</tr>
						    </td>
						    <td className="other_text cursor" key={i} onClick={(e) => this.handleModalShowHide(e)}  data-app={game.name} data-country={game.region} data-img={require('../img/'+ (i+1) +'.png')}><img src={price} className="other_img cursor" alt="price icon"/> View Pricing</td>
					        <td className="other_text "><img src={csv} className="other_img csv" alt="csv icon" /><a className="link" href="https://www.google.com">CSV</a></td>
					        <td className="other_text "><img src={report} className="other_img" alt="report icon" /><a className="link" href="https://www.google.com">Report</a></td>
					        <td className="other_text " onClick={() => this.toggleDatePicker}>
					        <label className="cursor">
					        <DatePicker
					           name={'date_pick'+i}
					           selected={this.state.startDate}
							   open={this.state.openDatePicker}
							   onOpenChange={this.datePickerStatus}
							   onChange={this.handleChange}
							/><img src={schedule} className="other_img cursor" alt="schedule icon" /> Schedule Again</label></td>
						</tr>
					);
				}
				else if(this.props.activeTab =="past" && past){
					return (
						<tr key={i} >
							<td><span className="camp_date">{camp_date}</span> <br/> <span className="days_ago">{daydiff} Days Ago</span></td>
							<td>
						      	<tr className="internal_table">
						      		<td className=""><img src={require('../img/'+ (i+1) +'.png')} className="game" alt="game icon" /></td>
						      		<td className="padding-l10"><span className="gameName">{game.name}</span> <br/> <span className="country_name">{game.region}</span></td>
						      	</tr>
						    </td>
						    <td className="other_text cursor" key={i} onClick={(e) => this.handleModalShowHide(e)}  data-app={game.name} data-country={game.region} data-img={require('../img/'+ (i+1) +'.png')}><img src={price} className="other_img cursor" alt="price icon"/> View Pricing</td>
					        <td className="other_text "><img src={csv} className="other_img csv" alt="csv icon" /><a className="link" href="https://www.google.com">CSV</a></td>
					        <td className="other_text "><img src={report} className="other_img" alt="report icon" /><a className="link" href="https://www.google.com">Report</a></td>
					        <td className="other_text " onClick={() => this.toggleDatePicker}>
					        <label className="cursor">
					        <DatePicker
					           name={'date_pick'+i}
					           selected={this.state.startDate}
							   open={this.state.openDatePicker}
							   onOpenChange={this.datePickerStatus}
							   onChange={this.handleChange}
							/><img src={schedule} className="other_img cursor" alt="schedule icon" /> Schedule Again</label></td>
						</tr>
					);
				}
				})
			}
		    
		      
		      
		      
		  </tbody>
		</Table>
		<Popup {...props} />
      </div>
    )
  }
}

export default Data
