import React,{useState} from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify';


const ContactUs = () => {
    let history = useHistory();

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit = () => {
        if(name == ''){
            toast.error("Please fill Full Name field")
        }else if(email == ''){
            toast.error("Please fill Email field")
        }else if ( !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
            toast.error("Please enter the valid email")
        }
        else if(message == ''){
            toast.error("Please fill Message field")
        }
        else{
            let form = new FormData();
            form.append('name',name)
            form.append('email',email)
            form.append('message',message)
            axios.post(`${process.env.REACT_APP_API_URL}/send-contact`,form,{
                headers: { "Content-Type": "multipart/form-data","Accept":"application/json" }
                }
            )
            .then(response => {
                    if(response.data.error == false){
                        toast.success(response.data.message)
                        setName('')
                        setEmail('')
                        setMessage('')
                    }else{
                        toast.error(response.data.message)
                    }
                    document.getElementById('name').value = null
                    document.getElementById('email').value = null
                    document.getElementById('message').value = null
                }).catch(errors => {
                    console.log(errors);
            });
        }
    }

    return(
        <Container className="contact-us" >
            <ToastContainer/>
            <div className="heading-div">
                    <h3 >Contact Us</h3>
            </div>
            <Container className="contact-div">
                <form>
                    <Row>
                        <Col xs={12} md={6}>
                            <label for="basic-url">Full Name</label>
                            <div class="input-group mb-3">
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" id="name" onChange={e => setName(e.target.value) }/>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <label for="basic-url">Email</label>
                            <div class="input-group mb-3">
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" id="email" onChange={e => setEmail(e.target.value) }/>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <label for="basic-url">Message</label>
                            <div class="input-group mb-3">
                                <textarea  className="form-control" rows="4" onChange={e => setMessage(e.target.value) } id="message"></textarea>
                            </div>
                        </Col>
                        <div class="form-group col-12 text-center">	
                            <button className="btn btn-primary btn-lg btn-block" type="button" style={{backgroundColor:'#912446',padding:'6px',fontSize:'30px',border:'0'}} onClick={handleSubmit}>Submit</button>
                        </div>
                    </Row>
                </form>
            </Container>
        </Container>
    )
}

export default ContactUs
