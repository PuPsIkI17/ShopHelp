import React from "react";
import { Container, Row, Col, Card, Image} from 'react-bootstrap';

import MyNavbar from "../Components/Navbar"
import IJBL from "../Images/team.jpg"
import Best from "../Images/best.jpeg"
import Coherent from "../Images/coherent.png"


import "../styles/Main.css"

const Tech = () => {
    return (
        <Container fluid className = "Main">
            <MyNavbar type={"Tech"}/>
            <Row className = 'pt-5 mt-5 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pb-4" >
                    <Card className = "Image">
                        <Card.Img variant="top" src={IJBL} />
                        <Card.Body>                  
                            <Card.Title> <h4>Team:</h4> <h3>"1234"</h3></Card.Title>
                        </Card.Body>
                    </Card>
                </Col> 
            </Row>
            <hr/>
            <Row className = 'mt-1 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pb-4" >
                    <h3>Members:</h3>
                </Col> 
            </Row>
            <Row className = 'mb-3 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pb-4" >
                    <h4>
                        Vadim Pislari
                    </h4>
                    Ongoing Amazon SDE
                    <br/>
                    <a href= "https://www.linkedin.com/in/vadim-pislari-364679173/">Linkedin</a>
                </Col>
                <Col md={{ span: 3 }} className="pb-4" >
                <h4>
                    Iulia Petcu
                </h4>
                Artist
                <br/>
                <a href= "https://iuliapetcu.netlify.app/">Online portfolio</a>
                </Col>  
                <Col md={{ span: 3 }} className="pb-4" >
                <h4>
                    Corneliu Calancea
                </h4>
                Thales Engineer
                <br/>
                <a href= "https://www.linkedin.com/in/corneliu-calancea-23641916b/">Linkedin</a>
                </Col>  
            </Row>
            <hr/>
            <Row className = 'mt-1 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pt-2" >
                    <h3>Hackaton:</h3>
                </Col> 
            </Row>
            <Row className = 'mt-1 text-center justify-content-md-center '>
                <Col md={{ span: 3 }}  >
                    <Image src={Coherent} className="Image pt-5"/>
                </Col> 
                <Col md={{ span: 3 }}  >
                    <Image src={Best} className="Image"/>
                </Col> 
            </Row>
            <hr/>
            <Row className = 'mt-1 pb-4 text-center justify-content-md-center '>
                <Col md={{ span: 3 }} className="pt-2" >
                    <a href="https://github.com/PuPsIkI17/ShopHelp"><h3>Github</h3></a>
                </Col> 
            </Row>
        </Container>
    )
}

export default Tech;