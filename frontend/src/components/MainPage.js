import React, { Component } from 'react';
import Header from './Header';
import Contact from './Contact';
import Slideshow from './Slideshow';
import Tiles from './Tiles';

class MainPage extends Component {

    render(){
        return(
            <div style={{backgroundColor:'#61122f'}}>
                <Header/>
                <Contact/>
                <Slideshow/>
                <Tiles/>
            </div>
        )
    }
}

export default MainPage;