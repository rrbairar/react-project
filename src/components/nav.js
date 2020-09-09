import React, {Component} from "react";
import logo from '../img/logo.png';
class Nav extends Component{
	render(){
		return(
			<div className="navigation">
				<div className="common_container">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
			</div>
		)
	}
}

export default Nav