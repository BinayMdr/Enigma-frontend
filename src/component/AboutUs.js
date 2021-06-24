import React,{useState , useEffect} from 'react'
import { Container,Image} from 'react-bootstrap';
import axios from 'axios'
import EnigmaLogo from '../image/ok.jpg'
import Logo from '../image/EnigmaLogo.png'

import OwlCarousel from 'react-owl-carousel';

const AboutUs = () => {

    const [bannerimage,setBannerImage] = useState('')
    const [members,setMembers] = useState([])

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/images`)
        .then(response => {
            setBannerImage(response.data[0])
            }).catch(e => {
        });

        axios.get(`${process.env.REACT_APP_API_URL}/member`)
        .then(response => {
            setMembers(response.data)
            }).catch(e => {
        });
    
    }, []);
    const  state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    }
    return(
        <Container className="aboutUs">
            <div className="banner-div">
                { bannerimage != '' &&
                    <Image src={`${process.env.REACT_APP_STORAGE_URL}${ bannerimage.image}`} className="banner"/>
                }
            </div>
            <div className="who-are-we">
                <div>
                    <img src={Logo}  className="side-logo"/>
                    <p>
                    Enigma is  the group formed by the group of young people who 
                    have a goal to bring the positive change in the field of gaming 
                    industry. Hoping for the best, and support from the Nepali gamers 
                    for this huge step in the field gaming industry. Jay Nepal!!!
                    </p>
                </div>
            </div>
                <div className="our-team" style={{background:'ghostwhite'}}>
                    <div  className="header-div">
                        <h1>Our Team</h1> 
                    </div>
                    <OwlCarousel 
                        items={4}  className="owl-theme"  loop  nav dots={false} margin={15} autoplay={true} responsive={state.responsive}>  

                            {
                                members.length != 0 &&
                                members.map( (member) => (  
                                    <div className="image-card">
                                        <a href="JavaScript:Void(0);">
                                            <img src={`${process.env.REACT_APP_STORAGE_URL}${ member.image}`}/>
                                        </a>
                                        <div className="user-social-link">
                                                <a href={member.fb_link} target="_blank">
                                                     <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a href={member.insta_link} target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                                <a href={member.linkedIn_link} target="_blank">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                        </div>
                                        <div className="user-details">
                                        <h3>{member.name}</h3>
                                            <span>{member.designation}</span>
                                        </div>
                                    </div>
                                ))
                            }   
                                
                        </OwlCarousel>

                </div>  
        </Container>
    )
}

export default AboutUs
