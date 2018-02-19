import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Footer } from '../Constant/Constants.js';

class About extends React.Component {
    render() {
        return (
            <Grid className="about fade-in">
                <Row>
                    <Col xs={12} md={12}>
                        <Link to="/"><h1>&lt;</h1></Link>
                        <h1>About me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <Image id="montreal" responsive src={require("./../assets/Capture.jpg")} height="350" width="900"/>
                        <figcaption>Mount Royal, Montreal</figcaption>
                        <p>Hi, my name is Brandon, and I’m a  software engineer. I love to <span id="about-cook">cook</span>, <span id="about-travel">travel</span>, and <span id="about-develop">develop</span>!</p>
                        <p>If you’d like to get in touch, please feel free to reach out.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <Footer />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default About