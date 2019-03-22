import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'

class Home extends Component {
    render () {
        return (
            <Container>
                <Jumbotron>
                    <h2> Wow this is the Jumbotron in a container.</h2>
                    <p> Is this really going to work?</p>
                </Jumbotron>
                <Link to='/about'>
                    <Button bsStyle='primary'>About</Button>
                </Link>
                <h1>
                    Have your SaaS and Customize it too! 
                </h1>
                <p>
                    Scale and impact systems thinking vibrant, global thought provoking LGBTQ+ data effective segmentation. Social enterprise, game-changer; shared vocabulary communities, social capital radical the resistance indicators empower communities. Inclusion, to design thinking, collective impact B-corp. Uplift disrupt white paper entrepreneur change-makers. Optimism white paper external partners, blended value co-create citizen-centered. Effective altruism venture philanthropy, compelling; program area black lives matter fairness. Design thinking program area, social innovation move the needle incubator peaceful. Living a fully ethical life design thinking accessibility ideate mass incarceration efficient boots on the ground thought provoking. Inclusive; social impact to thought partnership rubric uplift social enterprise. Social intrapreneurship; synergy; invest, justice initiative. Challenges and opportunities incubator, green space efficient thought leader gender rights. Disrupt society; social enterprise issue outcomes or change-makers impact. B-corp, shared unit of analysis white paper shared unit of analysis external partners. Scalable dynamic, communities rubric, shared value, white paper we must stand up.
                </p>
                <p>
                    Movements incubator, emerging we must stand up think tank shared value external partners milestones. Social entrepreneur; collaborative consumption; activate social return on investment capacity building leverage emerging. We must stand up, shared value catalyze data indicators when. Relief progress social impact, philanthropy challenges and opportunities. Venture philanthropy paradigm, white paper; problem-solvers commitment unprecedented challenge blended value. Innovation, activate; rubric gender rights innovate effective shared value empower game-changer. External partners social impact; change-makers, support collaborate; optimism commitment emerging preliminary thinking. Circular, inclusive, greenwashing; sustainable, milestones, boots on the ground revolutionary. Emerging inspiring, milestones strategy co-creation. Thought provoking incubator, technology empathetic, and, grit mobilize. Correlation, society black lives matter bandwidth policymaker black lives matter fairness systems thinking triple bottom line. Social impact, preliminary thinking, co-creation resilient inspire; greenwashing or natural resources. Human-centered progress improve the world black lives matter support NGO. Changemaker changemaker communities fairness; collaborative cities targeted boots on the ground.
                </p>
            </Container>
            )
    }
}

export default Home