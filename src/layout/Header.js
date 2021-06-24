import React from 'react'
import {useEffect,useState} from 'react';

import Headroom from 'react-headroom';

import { Container,Row,Col,Navbar,Nav} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import  Mailto from 'react-protected-mailto';

import EnigmaLogo from '../image/EnigmaLogo.png'

const Header = () => {

    const [homeActive,setHomeActive] = useState('active');
    const [tournamentActive,setTournamentActive] = useState('');
    const [galleryActive,setGalleryActive] = useState('');
    const [contactActive,setContactActive] = useState('');

    useEffect(() => {
      let url = window.location.href;
      if(url.includes('tournament')){
        setTournamentActive('active')
        document.title = "Tournament | Enigma"
      }else{
        setTournamentActive('');
      } 
      if(url.includes('gallery')){
        setGalleryActive('active')
        document.title = "Gallery | Enigma"
      }else{
        setGalleryActive('');
      } 
      if(url.includes('contact')){
        setContactActive('active')
        document.title = "Contact Us | Enigma"
      }else{
        setContactActive('');
      } 
      if(url == "http://localhost:3000/" || url == "http://127.0.0.1:3000/"){
        setHomeActive('active')
        document.title = "Home | Enigma"
      }else{
        setHomeActive('');
      } 
    },[]);
    
    const checkRoute = (e) =>{
      let url = e.target.href;
      if(url.includes('tournament')){
          setTournamentActive('active')
          document.title = "Tournament | Enigma"
      }else{
        setTournamentActive('');
      } 
      if(url.includes('gallery')){
        setGalleryActive('active')
        document.title = "Gallery | Enigma"
      }else{
        setGalleryActive('');
      } 
      if(url.includes('contact')){
        setContactActive('active')
        document.title = "Contact Us | Enigma"
      }else{
        setContactActive('');
      } 
      if(url == "http://localhost:3000/" || url == "http://127.0.0.1:3000/"){
        setHomeActive('active')
        document.title = "Home | Enigma"
      }else{
        setHomeActive('');
      } 
      document.getElementById("myNav").style.width = "0%";
      window.scrollTo(0, 0);
    }

    const openNav = () =>{
      document.getElementById("myNav").style.width = "100%";
    }
    const closeNav = () =>{
      document.getElementById("myNav").style.width = "0%";
    }
  const active = 'active';
    return(
        <div>
            <Router>
        <Headroom style={{
            WebkitTransition: 'all .5s ease-in-out',
            MozTransition: 'all .5s ease-in-out',
            OTransition: 'all .5s ease-in-out',
            transition: 'all .5s ease-in-out'
            }}>
            <ul className="nav">
              <li className={`link ${homeActive}`}>
                <Link to="/" onClick={checkRoute}>Home</Link>
              </li>
              <li className={`link ${tournamentActive}`}>
                <Link to="/tournament" onClick={checkRoute}>Tournament</Link>
              </li>
              <li className="logo">
                <img src={EnigmaLogo} class="enigma-logo"/>
              </li>
              <li className={`link ${galleryActive}`}>
                <Link to="/gallery" onClick={checkRoute}>Gallery</Link>
              </li>
              <li className={`link ${contactActive}`}>
                <Link to="/contact-us" onClick={checkRoute}>Contact Us</Link>
              </li>
              <span class="mobile-nav" onClick={openNav}>&#9776;</span>
            </ul>
        </Headroom>
                <div id="myNav" class="overlay">
                  <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                  <div class="overlay-content">
                    <Link to="/" onClick={checkRoute}>Home</Link>
                    <Link to="/tournament" onClick={checkRoute}>Tournament</Link>
                    <Link to="/gallery" onClick={checkRoute}>Gallery</Link>
                    <Link to="/contact-us" onClick={checkRoute}>Contact Us</Link>
                  </div>
                </div>
                </Router>
                </div>
    )
}

export default Header
