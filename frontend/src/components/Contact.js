import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Contact(){

const callBtn = {
	textAlign : 'center',
	backgroundColor: '#f6b319',
	border: '2px solid white',
	marginTop: '15px',
	padding: '5px'


}

const btn = {
	fontSize: '20px',
	fontFamily: 'Playfair Display',
	color: '#61122f'
}

const deliverText= {
	fontSize: '20px',
	color : 'white',
	textAlign : 'center',
	fontFamily: 'Playfair Display',
	padding: '5px'
}
    return(
		<div className="d-block d-lg-none">
			<div style={callBtn}>
				<a style={btn} href="tel:9823627183">
					<span><FontAwesomeIcon icon = {faPhone}/></span>
					9823627183
				</a>
			</div>
			<div style={deliverText}>* We Deliver</div>
		</div>
    )
};