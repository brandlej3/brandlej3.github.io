import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './../Constant/Constants.js';
import { Grid, Col, Row } from 'react-bootstrap';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
        <Grid className="fade-in">
            <Row>
                <Col xs={12} md={12}>         
                    < Header />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <ul className="home-list">
                        <li><Link to ="/about">ABOUT.</Link></li>
                        <li>PORTFOLIO.</li>
                    </ul>
                </Col>
            </Row>
        </Grid>
        )
    }
}

export default Home;