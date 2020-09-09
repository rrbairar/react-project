import React, {Component} from "react";
import {Modal, Button} from 'react-bootstrap';
import logoClicked from '../img/1.png';
class Popup extends Component{
	constructor(props){
        super(props);
        this.state = {
            showHide : props.isShowModal
        }
        
    }
    componentWillReceiveProps() {
        this.setState({ showHide: !this.state.showHide });  
    }
    closemodal = () => {
        this.setState({ showHide: !this.state.showHide })
    }

    render(){
        return(
            <div> 

                <Modal show={this.state.showHide} centered>
                    <Modal.Body>
                      <div className="popup_app_details">
                        <img src={logoClicked} className="game_img" alt="game" />
                        <div className="app_name_detail">
                          <p className="margin-0">PUBG Mobile</p>
                          <p className="country_name margin-0">US</p>
                        </div>
                      </div>
                      <div>
                        <p className="common_heading_2">Pricing</p>
                        <div className="app_price_detail">
                          <p className="margin-0 time">1 Week - 1 Month</p>
                          <p className="margin-0 price">$ 100.00</p>
                        </div>
                        <div className="app_price_detail">
                          <p className="margin-0 time">6 Months</p>
                          <p className="margin-0 price">$ 500.00</p>
                        </div>
                        <div className="app_price_detail">
                          <p className="margin-0 time">1 Year</p>
                          <p className="margin-0 price">$ 900.00</p>
                        </div>
                      </div>
                    </Modal.Body>
                    <div className="btn_container">
                      <Button className="close_btn" onClick={() => this.closemodal()}>
                          Close
                      </Button>
                    </div>
                </Modal>

            </div>
        )
    }
}

export default Popup