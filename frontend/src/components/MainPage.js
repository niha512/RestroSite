import React, { Component } from 'react';
import Header from './Header';
import Contact from './Contact';
import Slideshow from './Slideshow';
import Tiles from './Tiles';
import Footer from './Footer';

class MainPage extends Component {

    render(){
        return(
            <div style={{backgroundColor:'#61122f'}}>
                <Header/>
                <Contact/>
                <Slideshow/>
                <Tiles/>
                <Footer/>
            </div>
        )
    }
}

export default MainPage;