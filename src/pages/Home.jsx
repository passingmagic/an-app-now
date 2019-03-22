import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const HomePageLayout = styled.div`
  display: grid;
  grid-template-columns: 80px 250px 1fr;
  grid-template-rows: auto auto auto;
//   grid-template-rows: auto 1fr auto;
//   height: 100vh;
`;


const CardImage = styled.img`
    grid-row: ${props => props.row};
    margin-top: 5px;
    height: 400px;
    grid-column: 1/6;
`

const CardTitle = styled.h1`
    background-image: ${props => props.row % 2 === 0 ? '' : 'linear-gradient(to right, #6a1f01, #6a1f01 10%, #edbc9c)'};  
    margin-top: 5px;
    height: 400px;
    width: 100%;
    color: papayawhip;
    grid-column: 3;
    grid-row: ${props => props.row};
    font-size: 3rem;
    text-align: left;
    padding-top: 1em;
    padding-left: 1em;
`

const CardSubtitle = styled.h2`
    margin-left: 2em;
    margin-top: 3em;
    text-align: left;
    width: 90%;
    color: ${props => props.color ? props.color : 'papayawhip'};
    font-size: 2rem;
`

const CardBody = styled.p`
    margin-left: 1em;
    text-align: left;
    width: 90%;
    color: papayawhip;
    font-size: 1.8rem;
`

const ClearRow = styled.div`
    grid-row: ${props => props.row};
    height: 400px;
    grid-column: 1/12;
`;

const ClearTitle = styled.h1`
    color: black;
    text-align: left;
    font-size: 3rem;
    margin-top: 1em;
    margin-left: 3em;
    margin-right: 5em;
    grid-column: 1;
`;

const ClearBodyText = styled.p`
    color: ${props => props.color ? props.color : 'black'};
    text-align: left;
    font-size: 1.8rem;
    margin-top: 0.5em;
    margin-left: 5em;
    margin-right: 5em;
    grid-column: 1;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
`;

const BannerTextCard = styled.div`
    overflow: wrap;
    grid-column: 3;
    grid-row: ${props => props.row};
`

const Home = () =>
    <HomePageLayout>
        <CardImage row={1} src='images/bar-small.jpg'></CardImage>
            <CardTitle row={1}>IBM Sterling Order Management - onTap!
                <CardSubtitle>
                    Implemented to your requirements
                </CardSubtitle>
                <CardSubtitle>
                    Zero implementation costs
                </CardSubtitle>
                <CardSubtitle>
                    Delivered in a SaaS model
                </CardSubtitle>
            </CardTitle>

        <ClearRow>
            <ClearTitle>Experience a new way to have the industry leading Order Management software work for you</ClearTitle>
                <ClearBodyText>As a subscription service - at a fixed monthly cost</ClearBodyText>
                <br />
                <ClearBodyText>Starting at $35K/month</ClearBodyText>
                <br />
                <ClearBodyText>Have your SaaS, and customize it too!</ClearBodyText>
            <br />
            <ClearBodyText>Price includes everything except License costs. You will need to purchase a License for the software separately.</ClearBodyText>
            <ClearBodyText>If you aren't already in touch with IBM, we can help you with the License purchase from IBM.</ClearBodyText>
        </ClearRow>

        <CardImage row={3} src='images/stay-focused.jpg'></CardImage>
        <CardTitle row={3}>
            Stay focused on your business
                    <CardSubtitle>Fully Managed and Supported</CardSubtitle>
            <CardSubtitle>Agile feature deployment</CardSubtitle>
            <CardSubtitle>Go live in 2 months</CardSubtitle>
        </CardTitle>

        <ClearRow>
            <ClearTitle>Curb your Costs. Keep your Enthusiasm</ClearTitle>
            <ClearBodyText>We believe that our model will result in a roughly 50% savings on your TCO over a traditional model. This is the result of exceptional expertise and industry experience coupled with our unique model.</ClearBodyText>
            <br />
            <ClearBodyText>
                <Link to='/contact'>Start</Link> a conversation with us now to discuss your needs and determine if our solution is right for you.</ClearBodyText>
        </ClearRow>

    </HomePageLayout>

export default Home