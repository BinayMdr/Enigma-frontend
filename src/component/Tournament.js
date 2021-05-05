import React,{useEffect,useState} from 'react'
import { Container,Image,Accordion,Card,Button,Row,Col} from 'react-bootstrap';
import Banner from '../image/banner.jpg';
import {useHistory} from "react-router-dom";
import {ToastContainer,toast,Zoom} from 'react-toastify';
import axios from 'axios';

const Tournament = (props) => {
    let history = useHistory();
    const [bannerimage,setBannerImage] = useState('')
    const [roadmap,setRoadMap] = useState('')
    const [rules,setRules] = useState([])

    useEffect(() => {
        // console.log(process.env.REACT_APP_API_URL)
        if(props.match.params.slug == undefined) history.push('/tournament')

        axios.get(`${process.env.REACT_APP_API_URL}/images`)
        .then(response => {
            setBannerImage(response.data[0])
            setRoadMap(response.data[1])
            }).catch(e => {
        });

        axios.get(`${process.env.REACT_APP_API_URL}/rules`)
        .then(response => {
            setRules(response.data)
            }).catch(e => {
        });

       
        
    }, []);

    const onSubmit = () =>{
        toast.error("empty")
    }

    return(
        <Container className="tournament">
            <ToastContainer/>
            <div className="banner-div">
                <Image src={`${process.env.REACT_APP_STORAGE_URL}${ bannerimage.image}`} className="banner"/>
            </div>
            <div className="roadmap-div">
                <Image src={`${process.env.REACT_APP_STORAGE_URL}${ roadmap.image}`} className="roadmap"/>
            </div>
            <div className="rules-div">
                <Accordion className="rules-accordian">
                    <Card className="rules-card">
                        <Card.Header className="rules-card-header">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="rules-accordian-button">
                                <h1>RULES</h1>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0" className="rules-accordian-collapse">
                            <Card.Body className="rules-card-body">
                                <Row>
                                    { rules.map((rule) =>
                                        <Col xs={12} xl={6} className="rule-list"> <span><i className="fa fa-check-circle"></i></span>
                                        <span className="rules-description">{rule.description}</span>
                                        </Col>
                                    )}
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            <div className="register-div">
                <form class="col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                    <h3 class="text-center">Register Here!!!</h3>
                    <div class="row">
                        <div class="input-container col-6">
                            <label>Full Name</label><br/>		
                            <input type="text" name="name" id="name"  autocomplete="off" />
                        </div>
                        <div class="input-container col-6">		
                            <label>Email</label><br/>
                            <input type="text" name="email" id="email"  autocomplete="off"/>
                        </div>
                        <div class="input-container col-6">
                            <label>Game Id</label><br/>	
                            <input type="text" name="game_id" id="game_id"  autocomplete="off" />
                        </div>
                        <div class="input-container col-6">		
                            <label>Game Name</label><br/>
                            <input type="text" name="game_name" id="game_name"  autocomplete="off" />
                        </div>
                        <div class="input-container col-12">		
                            <label>Discord Id</label><br/>
                            <input type="text" name="discord_id" id="discord_id" className="discord-input" autocomplete="off" />
                        </div>
                        <div class="form-group col-6">	
                            <label class="form-text">Select Profile Image</label> 
                            <input type="file" class="image-field form-control-file" name="profile_image" />
                        </div>
                        <div class="form-group col-6">	
                            <label class="form-text"> Select Validate Image</label>
                            <input type="file" class="image-field form-control-file" name="validate_images[]"  multiple/>
                        </div>
                        <input type="hidden" name="slug"/>
                        <div class="form-group col-12 text-center">	
                            <button class="btn register-btn" type="button" onClick={onSubmit}>REGISTER</button>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default Tournament
