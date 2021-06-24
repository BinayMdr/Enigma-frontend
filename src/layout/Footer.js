import React from 'react'
import {useEffect,useState} from 'react';

import { Container,Row,Col,Navbar,Nav} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import  Mailto from 'react-protected-mailto';
import EnigmaLogo from '../image/EnigmaLogo.png'

const Footer  = () => {

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
        <footer>
          <Router>
          <Container>
            <Row>
              <Col sm="6" md="4" lg="3">
                <img src={EnigmaLogo} alt="Enigma Logo" className="logo"/><br/>
                <span>Where dream begins!!!</span>
              </Col>
              <Col sm="6" md="4" lg="3"> <h4>USEFUL LINKS</h4>
                <ul>
                  <li className="footer-link">
                    <Link to="/" onClick={checkRoute}>Home</Link>
                  </li>
                  <li className="footer-link">
                    <Link to="/tournament" onClick={checkRoute}>Tournament</Link>
                  </li>
                  <li className="footer-link">
                    <Link to="/gallery" onClick={checkRoute}>Gallery</Link>
                  </li>
                  <li className="footer-link">
                    <Link to="/contact-us" onClick={checkRoute}>Contact Us</Link>
                  </li>
                </ul>
              </Col>
              <Col sm="6" md="4" lg="3"><h4>NEED HELP?</h4>
                <ul>
                  <li className="footer-contact-link">
                    <i className="fas fa-envelope"></i><Mailto  className="email" email="enigmaesports01@gmail.com"/>
                  </li>
                  <li className="footer-contact-link">
                    <i className="fas fa-phone"></i><Mailto tel="+977-9849823198"/>
                  </li>
                </ul>
              </Col>
              <Col sm="6" md="6" lg="3" className="follow-us"><h4>FOLLOW US</h4>
                <a href="https://www.facebook.com/enigmaesp01" target="_blank">
                  <i className="fab fa-facebook-f social-link"></i>
                </a>
                <a href="https://www.instagram.com/enigma__officials/" target="_blank">
                  <i className="fab fa-instagram  social-link"></i>
                </a>
                  <a href="" target="_blank">
                <i class="fab fa-youtube  social-link"></i>
                </a>
                  <a href="" target="_blank">
                <i class="fab fa-twitter  social-link"></i>
                </a>
                <a href="https://discord.gg/MHfy3xTs" target="_blank">
                  <i class="fab fa-discord  social-link"></i>
                </a>
              </Col>
            </Row>
          </Container>
          <div style={{
                textAlign: 'center',
                fontSize: '14px',
                paddingBottom: '6px'
            }}>
            <span>Copyright © 2021 Enigma All Rights Reserved.</span>
          </div>
          </Router>
        </footer>
    )
}

export default Footer
