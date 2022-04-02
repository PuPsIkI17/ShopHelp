import React, {useState} from "react";
import { Container, Row, Col, Card, Image, ButtonGroup, Button, ButtonToolbar} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import MyNavbar from "../Components/Navbar"

import IMalai from "../Products/ProductImages/malai.jpg"
import SMalai from "../Products/ProductImages/malaiSign.jpg"
import IWater from "../Products/ProductImages/water.jpg"
import SWater from "../Products/ProductImages/waterSign.gif"
import IJBL from "../Products/ProductImages/jbl.jpg"
import SJBL from "../Products/ProductImages/hearing.gif"
import IParacetamol from "../Products/ProductImages/paracetamol.jpg"
import SParacetamol1 from "../Products/ProductImages/paracetamol1.png"
import INurofen from "../Products/ProductImages/nurofen.jpg"
import SNurofen from "../Products/ProductImages/nurofenSign.jpg"
import IJuice from "../Products/ProductImages/cappy.jpg"
import SJuice from "../Products/ProductImages/juiceSign.jpg"

import "../styles/Main.css"
import Speech from "../Components/Speech";
import Parser from "../Components/Parser";

const details = [
    {
        title: "Cook only with quality malai and choose Baneasa malai, the malai recommended by all housewives!",
        description: "Malai is an ingredient used for both main dishes and desserts, it is obtained from the best quality corn. Baneasa extra corn is a degerminated corn, ie before the grinding process, through the technological production process, the germs inside the corn grains were removed.",
        price: "5 lei"
    },
    {
        title:"Take a look at the list of attributes, features, and benefits you might get when choosing to drink plain water from Miraqua",
        description:"Because we know how important water is for you, we offer you a box of 12 bottles of Borsec plain water, in the 0.5 liter version and a plastic container, ideal to be taken with you for a walk, work or a trip!",
        price: "1.9 lei"
    },
    {
        title:"JBL FLIP 5 Portable Wireless Bluetooth Speaker IPX7 Waterproof On-The-Go Bundle with Boomph Hardshell Protective Case - Black",
        description:"LOUD & CLEAR MUSIC ANYWHERE: This wireless Bluetooth speaker has a new racetrack-shaped driver that delivers crystal clear and loud music as well as strong bass. The portable speaker is wireless so you can listen to music during your outdoor and travel adventures.",
        price: "600 lei"
    },
    {
        title:"Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known.",
        description:"Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers. It relieves pain in mild arthritis but has no effect on the underlying inflammation and swelling of the joint.",
        price: "15 lei"
    },
    {
        title:"Nurofen 200mg Coated Tablets work where they are needed – at the site of pain*. They quickly relieve pain and lower temperature",
        description:"Adults and children 12 years and older: Swallow 2 tablets (400 mg) with water, then, if necessary, take 1 or 2 tablets (200 mg or 400 mg) every 4 hours.Do not take more than 6 tablets (1200 mg) in 24 hours.Not suitable for children under 12 years.        If symptoms persist for more than 3 days or if new symptoms occur, stop treatment at once and consult your doctor.",
        price: "30 lei"
    },
    {
        title:"Cappy 100%  orange is a delicious juice full of the goodness from fruit.",
        description:"A great drink to start your day as part of a nourishing breakfast, which is the most important meal of the day.  We at Cappy have been creating delicious fruit drinks for over 60 years, prioritizing quality and great taste without using preservatives*. Fill your glass and the glasses of your loved ones with Cappy and watch the goodness spread. When you care, they care, and when they care, goodness grows and a good morning is turned into a good day. DOING GOOD, TASTES GOOD.",
        price: "5 lei"
    }
]

const Product = () => {
    const [option,setOption] = useState(0);
    const pathname = window.location.pathname;
    const location = useLocation();
    let type = 0;
    let name = "";

    if(location && location.state){
        type = location.state.type;
        name = location.state.name;
    }
    else if(pathname.localeCompare("/5449000195036") === 0){
        type = 6;
        name = "Juice";
    }
    let IPhoto = IMalai;
    let SPhoto = SMalai;

    if(type === 2){
        IPhoto = IWater;
        SPhoto = SWater
    }
    if(type === 3){
        IPhoto = IJBL;
        SPhoto = SJBL
    }

    if(type === 4){
        IPhoto = IParacetamol;
        SPhoto = SParacetamol1;
    }

    if(type === 5){
        IPhoto = INurofen;
        SPhoto = SNurofen;
    }

    if(type === 6){
        IPhoto = IJuice;
        SPhoto = SJuice;
    }
    if (type !== 0)
        return (
            <Container fluid className = "Main">
                <MyNavbar type = {name}/>
                <Row className = 'mt-3 pt-md-5 mt-md-5 text-center justify-content-md-center '>
                    <Col md={{ span: 3 }} className="pb-4" >
                        <Card className = "Image">
                            <Card.Img variant="top" src={IPhoto} />
                            <Card.Body>                  
                                <Card.Title> <Image src={SPhoto} alt="Logo" className = "ImageSign" />  </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={{ span: 5 }} className="pb-4 pt-5" >                    
                    {option === 0 &&
                        <div>
                            <h3>Details:</h3>
                            <b>{details[type - 1].title}</b>
                            <br/>
                            <br/>
                            <p>
                                {details[type - 1].description}
                            </p>
                            <br/>
                            <br/>
                            <h5>Price</h5> {details[type - 1].price}
                        </div>
                    } 
                    {option === 1 &&
                        <div>
                            <Parser description={"Details"}/>
                            <br/>
                            <Parser description={details[type - 1].title}/>
                            <br/>
                            <br/>
                            <Parser description={details[type - 1].description}/>
                            <br/>
                            <br/>
                            <Parser description={ "  price"}/>
                            :{details[type - 1].price}
                            <Parser description={details[type - 1].price}/>
                        </div>
                    }
                    </Col>

                    </Row>
                <Row className = 'ms-md-0 ms-5 mt-md-5 text-center justify-content-md-center '>
                    <Col md={{ span: 3 }} className="pb-4" >
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group">
                            {option === 0 &&
                                <div>
                                    <Button onClick = {() => setOption(0)}>Letters</Button>
                                    <Button onClick = {() => setOption(1)} variant="outline-primary">Signes</Button> 
                                </div>
                            }
                           {option === 1 &&
                                <div>
                                    <Button onClick = {() => setOption(0)} variant="outline-primary">Letters</Button>
                                    <Button onClick = {() => setOption(1)}>Signes</Button> 
                                </div>
                            }

                            <Speech className ="mt-5" description={"Details" + details[type - 1].title + details[type - 1].description + "  price" + details[type - 1].price}/>
                        </ButtonGroup>
                    </ButtonToolbar>
                    </Col>
                </Row>
            </Container>
        )
    else 
    return (
        <Container fluid className = "Main">
            <MyNavbar type = {"Error"}/>
            <Row className = 'mt-3 pt-md-5 mt-md-5 text-center justify-content-md-center '>
                <Col md={{ span: 5 }} className="pb-4" >
                    <h1>Error</h1>
                    <br/>
                    <h4>Please try again</h4>
                </Col>
            </Row>
                <Speech description={"Error"}/>
                <Parser description={"Error"}/>
        </Container>    
    )
}

export default Product;