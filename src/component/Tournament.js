import React,{useEffect,useState} from 'react'
import { Container,Image,Accordion,Card,Button,Row,Col} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify';
import axios from 'axios';

const Tournament = (props) => {
    let history = useHistory();
    const [bannerimage,setBannerImage] = useState('')
    const [roadmap,setRoadMap] = useState('')
    const [rules,setRules] = useState([])

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [slug,setSlug] = useState('')
    const [gameId,setGameId] = useState('')
    const [gamename,setGameName] = useState('')
    const [discordId,setDiscordId] = useState('')
    const [profileImage,setProfileImage] = useState('')
    const [validateImage,setValidateImage] = useState('')

    useEffect(() => {
        if(props.match.params.slug != undefined){
            var form = new FormData();
            form.append('slug',props.match.params.slug)

            axios.post(`${process.env.REACT_APP_API_URL}/validate-token`,form
            ).then(response => {
                if(response.data.error == true)
                {
                    toast.error(response.data.message)
                    setTimeout(function(){
                        history.push('/tournament')
                        }, 2000);
                }
                else{
                    setName(response.data['name'])
                    setEmail(response.data['email'])
                    setSlug(response.data['slug'])
                }
            }).catch(e => {
                console.log(e.errors)
            }) ;  
        }

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
        if(slug == ''){
            toast.error("You don't have a token!!!")
        }else if(gameId == ''){
            toast.error("Please fill Game Id field")
        }else if(gamename == ''){
            toast.error("Please fill Game Name field")
        }else if(discordId == ''){
            toast.error("Please fill Discord Id field")
        }else if(profileImage == ''){
            toast.error("Please upload the profile image as well")
        }else if(validateImage == ''){
            toast.error("Please upload the validate image as well")
        }
        else{
            let form = new FormData();
            form.append('slug',slug)
            form.append('gameId',gameId)
            form.append('game_name',gamename)
            form.append('discordId',discordId)
            form.append('profileImage',profileImage) 
            form.append('imageLength',validateImage.length)
            for(let i in validateImage){
                form.append(`validateImage-${i}`,validateImage[i])
            }
            axios.post(`${process.env.REACT_APP_API_URL}/register`,form,{
                headers: { "Content-Type": "multipart/form-data","Accept":"application/json" }
                }
            )
            .then(response => {
                    if(response.data.error == false){
                        toast.success(response.data.message)
                        setSlug('')
                        setGameId('')
                        setGameName('')
                        setDiscordId('')
                        setProfileImage('')
                        setValidateImage('')
                        setTimeout(function(){
                            history.push('/tournament')
                        }, 2000);
                    }else{
                        toast.error(response.data.message)
                    }
                    document.getElementById('profileImage').value = null
                    document.getElementById('validateImage').value = null
                    document.getElementById('full_name').value = null
                    document.getElementById('email').value = null
                }).catch(errors => {
                    document.getElementById('profileImage').value = null
                    document.getElementById('validateImage').value = null
                    toast.error('Please upload image only')
            });
        }
    }

    const profileImageHandler = (e) => {
        e.preventDefault();
        setProfileImage(e.target.files[0])
    }

    const validateImageHandler = (e) => {
        e.preventDefault();
        var arr = [];
        for(let i=0 ; i < e.target.files.length ; i++ ){
            arr.push(e.target.files[i])
        }
        setValidateImage(arr)
    }
    return(
        <Container className="tournament">
            <ToastContainer/>
            <div className="banner-div">
                {   bannerimage != '' &&
                    <Image src={`${process.env.REACT_APP_STORAGE_URL}${ bannerimage.image}`} className="banner"/>
                }
            </div>
            <div className="about-tournament">
                <div className="heading-div">
                    <h3>About Tournament</h3>
                </div>
                <div>
                        <p>
                        Enigma is  the group formed by the group of young people who 
                        have a goal to bring the positive change in the field of gaming 
                        industry. Hoping for the best, and support from the Nepali gamers 
                        for this huge step in the field gaming industry. Jay Nepal.
                        Enigma is  the group formed by the group of young people who 
                        have a goal to bring the positive change in the field of gaming 
                        industry. Hoping for the best, and support from the Nepali gamers 
                        for this huge step in the field gaming industry. Jay Nepal.
                        Enigma is  the group formed by the group of young people who 
                        have a goal to bring the positive change in the field of gaming 
                        industry. Hoping for the best, and support from the Nepali gamers 
                        for this huge step in the field gaming industry. Jay Nepal.
                        Enigma is  the group formed by the group of young people who 
                        have a goal to bring the positive change in the field of gaming 
                        industry. Hoping for the best, and support from the Nepali gamers 
                        for this huge step in the field gaming industry. Jay Nepal.
                        </p>
                 </div>
            </div>
            <div className="roadmap-div">
                { roadmap != '' &&
                    <Image src={`${process.env.REACT_APP_STORAGE_URL}${ roadmap.image}`} className="roadmap"/>
                }
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
                                    { rules.length != 0 &&
                                        rules.map((rule,index) =>
                                        <Col xs={12} xl={6} className="rule-list" key={rule.id}>
                                            <div className="rules-description">  {rule.description}</div>
                                        </Col>
                                    )}
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            <div className="register-div">
                <form>
                    <h3 class="text-center">Register Here!!!</h3>
                    <div class="row">
                        <div class="input-container col-6">
                            <label>Full Name</label><br/>		
                            <input type="text" name="name" id="name"  autocomplete="off" value={name} id="full_name" onChange={e => setName(e.target.value) } readOnly/>
                        </div>
                        <div class="input-container col-6">		
                            <label>Email</label><br/>
                            <input type="text" name="email" id="email"  autocomplete="off" value={email} id="email" onChange={e => setEmail(e.target.value) } readOnly/>
                        </div>
                        <div class="input-container col-6">
                            <label>Game Id</label><br/>	
                            <input type="text" name="game_id" id="game_id"  autocomplete="off" value={gameId} onChange={e => setGameId(e.target.value) }/>
                        </div>
                        <div class="input-container col-6">		
                            <label>Game Name</label><br/>
                            <input type="text" name="game_name" id="game_name"  autocomplete="off" value={gamename} onChange={e => setGameName(e.target.value) }/>
                        </div>
                        <div class="input-container col-12">		
                            <label>Discord Id</label><br/>
                            <input type="text" name="discord_id" id="discord_id" className="discord-input" autocomplete="off" value={discordId} onChange={e => setDiscordId(e.target.value) }/>
                        </div>
                        <div class="form-group col-6">	
                            <label class="form-text">Select Profile Image</label> 
                            <input type="file" class="image-field form-control-file" name="profile_image" id="profileImage" onChange={profileImageHandler} />
                        </div>
                        <div class="form-group col-6">	
                            <label class="form-text"> Select Validate Image</label>
                            <input type="file" class="image-field form-control-file" name="validate_images[]" id="validateImage" multiple onChange={validateImageHandler}  />
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
