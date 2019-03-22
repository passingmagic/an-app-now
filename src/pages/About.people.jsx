import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './About.css'
import srijith from '../images/srijith.jpg'
import needcoffee from '../images/needcoffee.jpg'
import steve from '../images/steve.jpg'

class About extends Component {
    render () {
        return (
            <Container>
                <Row>
                    <p>We are an orgperson and we are passionate about technology. We proudly list our demographic as Nerd/Geek. We gladly suffer the discrimination that brings, with one refrain - we are focused on making technology work to bring value to our customer.</p>

                    <p>Our overriding focus is to add value through the pragmatic use of technology in elegant ways.  Pragmatic in that we build for what's needed now, elegant in that it's done with designs created to meet tomorrow's needs.</p>
                    <p>We are hungry. We use technology and business acumen to create opportunities and add value for everyone involved.</p>
                    <p>Give us a chance to show you what opportunities and values we can create for you.</p>
                    <p>If this resonates with you then please reach out and touch us.</p>
                </Row>
                <Row>
                <Col xs={12} sm={4} >
                        <Image src={srijith} fluid/>
                        <p>I climb mountains...because they are there.</p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Image src={needcoffee} fluid/>
                        <p>Running on empty.</p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Image src={steve} fluid/>
                        <p>You can be in this blissful state that I am in too. Let me strum you a lick or two on my guitar</p>
                    </Col>                    
                </Row>
            </Container>
        )
    }
}

export default About