import React from 'react'
import styled from 'styled-components'

const HowPageLayout = styled.div`
  display: grid;
  grid-template-columns: 149px 250px 1fr;
  grid-template-rows: auto auto;
  grid-row-gap: 1.5em;
`;

const CardImage = styled.section`
    grid-row: ${props => props.row};
    background-image: url(${props => props.imageFile}); 
    background-repeat: no-repeat;
    margin-top: 5px;
    height: 100px;
    grid-column: 1;
`

const CardTitle = styled.h1`
    background-image: linear-gradient(to right, #6a1f01, #6a1f01 10%, #edbc9c);
    margin-top: 5px;
    margin-left: 10px;
    height: 50px;
    width: 100%;
    color: papayawhip;
    grid-column: 2/9;
    grid-row: ${props => props.row};
    font-size: 3rem;
    text-align: left;
    padding-top: 0.2em;
    padding-left: 1em;
`;

const CardBodyText = styled.section`
    grid-row: ${props => props.row};
    grid-column: 2/9;
    color: ${props => props.color ? props.color : 'black'};
    text-align: justify;
    font-size: 1.8rem;
    margin-left: 10em;
    margin-right: 10em;
`;


const How = () =>
    <HowPageLayout>
        <CardImage row={1} imageFile='images/pudding.jpg' />
        <CardTitle row={1}>The proof of the pudding, is in the eating</CardTitle>
        <CardBodyText row={2}>
            <p>We are strongly of the philosophy that you pay for software after you see it manifest, and see it meeting your requirements. This is in stark contrast to the traditional SI (Systems Integrator) and "Consulting" models where you pay and pray.</p>
        </CardBodyText>
        <CardImage row={3} imageFile='images/agile.jpg' />
        <CardTitle row={3}>Get Lean. Be Agile.</CardTitle>
        <CardBodyText row={4}>
            <p>We are focused on getting business value to be realized as soon as possible. Consequently our MO is to discern and build out functionality to get you live as soon as possible.</p>
        </CardBodyText>
        <CardImage row={5} imageFile='images/journey.jpg' />
        <CardTitle row={5}>MVP is not the destination</CardTitle>
        <CardBodyText row={6}>
            <p>Many outfits that purport to be agile and lean, will take you to a "MVP" and then grind down to an exceedingly slow pace; often falling back to traditional approaches and their attendant sloth-like pace of delivering functionality.</p>

            <p>Our approach is significantly different. Because we operate in a subscription model, we realize that you can choose to end your subscription at any time*. Consequently it is in our interest to ensure that we are constantly keeping you happy.</p>
            <p>*2 month notice required to stop service.</p>
        </CardBodyText>
    </HowPageLayout >

export default How