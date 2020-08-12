import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import { faCheck, faUtensils, faInfo, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    return(
        <Navbar className = "header-style" collapseOnSelect expand="lg">
            <div className="container">
            <Nav.Link href="/" className = "logo d-none d-sm-block"></Nav.Link>
            <Navbar.Brand className = "mr-auto">
                <a href="/" className="restro-name">
                    <h2 >David's Bistro</h2>
                </a>
                <FontAwesomeIcon icon={faCheck} />
                <span>Kosher Certified</span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className = "ml-auto">
                <Nav.Link  href="/menu" className = "nav-text">
                    <span><FontAwesomeIcon icon = {faUtensils}/>
                    <br className = "d-none d-md-block"/>&nbsp;Menu
                    </span>
                </Nav.Link>
                <Nav.Link href="/menu" className = "nav-text">
                    <span><FontAwesomeIcon icon = {faInfo}/>
                    <br className = "d-none d-md-block"/>&nbsp;About
                    </span>
                </Nav.Link>
                <Nav.Link href="/menu" className = "nav-text">
                    <span><FontAwesomeIcon icon = {faCertificate}/>
                    <br className = "d-none d-md-block"/>&nbsp;Awards
                    </span>
                </Nav.Link>
                <Nav.Link href="/menu" className = "telephone d-none d-md-block" >
                    <span >9994445678</span>
                    <div>* We Deliver</div>
                </Nav.Link> 
                </Nav>
            </Navbar.Collapse>  
            </div>         
        </Navbar>
    );
}