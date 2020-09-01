import React,{ Component } from 'react';
import './Tiles.css';

export default class Tiles extends Component {
    render(){
        return(
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-sm-6 col-xs-12 col-md-4">
                    <a href="https://goo.gl/maps/Pm1LGZSxo3XrxEMv5" >
                    <div className="special-tile">
						<span>Specials</span>
					</div>
                    </a>
                    </div>
                    <div className="col-sm-6 col-xs-12 col-md-4">
                    <a href="https://goo.gl/maps/Pm1LGZSxo3XrxEMv5" >
                    <div className="menu-tile">
						<span>Menu</span>
					</div>
                    </a>
                    </div>
                    <div className="col-sm-6 col-xs-12 col-md-4">
                    <a href="https://goo.gl/maps/Pm1LGZSxo3XrxEMv5" >
                    <div className="map-tile">
                        <iframe frameborder="0" allowfullscreen=""  title="map" width="100%" height="250" className="map-frame"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.495524108257!2d151.20587031633826!3d-33.876889826912404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3da326cd03%3A0xfed7f426c0832526!2sDavid&#39;s%20Kitchen!5e0!3m2!1sen!2sin!4v1571681923983!5m2!1sen!2sin"></iframe>
						<span>Map</span>
					</div>
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}