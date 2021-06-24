import React , {useEffect,useState} from 'react';
import './App.css';
//React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Toast
import {ToastContainer,toast,Zoom} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

//
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Component
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Tournament from './component/Tournament';
import Gallery from './component/Gallery';

import Headroom from 'react-headroom';

import { Container,Row,Col,Navbar,Nav} from 'react-bootstrap';
import  Mailto from 'react-protected-mailto';

import EnigmaLogo from './image/EnigmaLogo.png';

function App() {

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
    });
    
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
  return (
    <div className="App">
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

            <Switch>
              <Route exact path="/">
                <AboutUs />
              </Route>
              <Route path="/contact-us">
                <ContactUs />
              </Route>
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/tournament/:slug?" component={Tournament}/>
              <Route path="*">
                <AboutUs />
              </Route>
            </Switch>
        <footer>
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
        </footer>
      </Router>
    </div>
  );
}

export default App;
