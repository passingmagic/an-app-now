import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './HomeCards.css'
import bar from '../images/bar-small.jpg'
import stayfocused from '../images/stay-focused.jpg'

class HomeCards extends Component {
    render() {
        return (
            <Container>
                <Card text='red' style={{ width: '18rem'}} >
                    <Card.Img src={bar}/>
                    <Card.ImgOverlay>
                        <Card.Title> IBM Sterling Order Management</Card.Title>
                        <Card.Subtitle>Zero implementation costs</Card.Subtitle>
                        <Card.Text>Delivered as a subscription service</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card text='red' style={{ width: '18rem'}} >
                    <Card.Img src={stayfocused}/>
                    <Card.ImgOverlay>
                        <Card.Title>Have your SaaS and Customize it too!</Card.Title>
                        <Card.Subtitle>Fully customized solutions for your needs</Card.Subtitle>
                        <Card.Text>Stay focused on your business, while we bring you order management capabilities as a service</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        )
    }
}

export default HomeCards