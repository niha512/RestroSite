import React, { Component } from 'react';
import Header from './Header';
import Contact from './Contact';
import Slideshow from './Slideshow';

class MainPage extends Component {

    render(){
        return(
            <div style={{backgroundColor:'#61122f'}}>
                <Header/>
                <Contact/>
                <Slideshow/>
            </div>
        )
    }
}

export default MainPage;