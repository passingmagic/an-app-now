import React from 'react'
import styled from 'styled-components'

const AboutPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: auto auto auto;
`

const AboutHero = styled.img`
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    grid-column: 1/12;
`

const AboutBanner = styled.section`
    background-image: linear-gradient(to right, #6a1f01, #6a1f01 10%, #edbc9c);  
    // background-image: linear-gradient(to right, #9e3f00, #9e3f00 10%, #f3ab7b);  
    height: 50px;
    width: 100%;
    color: papayawhip;
    grid-row: 2;
    grid-column: 1/12;
    margin-top: 2px;
    // margin-left: 159px;
    font-size: 3rem;
    text-align: left;
    padding-left: 0.5em;
`

const AboutBody = styled.section`
    grid-row: ${props => props.row};
    color: ${props => props.color ? props.color : 'black'};
    text-align: justify;
    font-size: 1.8rem;
    margin-top: 0.5em;
    margin-left: 10em;
    margin-right: 10em;
`


const About = () =>
    <AboutPageLayout>
        <AboutHero src='images/panorama-2300806_1920.jpg' />
        <AboutBanner>Rooted in the San Francisco Bay Area</AboutBanner>
        <AboutBody>
            <p>Formed and run by a group of highly skilled and experienced professionals that were part of the original company and product that forms the core of IBM Sterling Order Management - Yantra. As ex-Yantriks, and ex-IBMers, we are intimately familiar with the product and the best way to implement solutions with it.</p>
            <br/>
            <p>We bring over 50 years of combined experience. Our domain expertise spans ecommerce, order management, and supply chain. We have advised and built solutions for a number of marquee companies: both, large as well as smaller ones - the ones close to our heart; the ones that we want to help compete and win over the Goliaths.</p>
            <br/>
            <p>We derive our inspiration and culture from a spectrum of thought leaders spanning business and technology domains: Kent Beck, Clayton Christiansen, Ward Cunningham, Stephen Covey (Speed of Trust), Fred Brooks.</p>
            <br/>
            <p>Our overriding focus is to add value through the pragmatic use of technology in elegant ways.  Pragmatic in that we build for what's needed now, elegant in that it's done with designs created to meet tomorrow's needs.</p>
            <br/>
            <p>We are hungry. We use technology and business acumen to create opportunities and add value for everyone involved. Give us a chance to show you what opportunities and values we can create for you.</p>
             <br/>
            <p>If this resonates with you, please reach out and touch us.</p>
        </AboutBody>
    </AboutPageLayout>
export default About