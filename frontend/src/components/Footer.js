import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component{

    render(){
        return(
            <div className="footerStyle">
                <div className="container">
                    <div className="row">
                        <div className="textStyle col-sm-4">
                            <span> Hours:</span><br/>
                            Sun-Fri: 11am - 10pm<br/>
                            Saturday Closed
                            <hr className="d-block d-lg-none"/>
                        </div>
                        <div className = "textStyle col-sm-4">
                            <span>Address:</span>
                            7150 EastRoad <br/>
                            Baltimore, NY<br/>
                            <p>*Delivery Area within 3-4miles</p>
                            <hr className="d-block d-lg-none"/>
                        </div>
                        <div className = "testimonials col-sm-4">
                            <p>"Best chinese restaurant ever" <br/>
                            "Amazing food. Must have! Great Service!"</p>
                        </div>
                    </div>  
                    <div className="copyright">&copy; Copyright David Chu's Bistro</div> 
                </div>
            </div>    
        )
    }

}