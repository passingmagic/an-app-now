import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ontaplogo from '../images/ontap.jpg'
import ContactForm from './ContactForm'

const StyledFooter = styled.footer`
    background-image: linear-gradient(to right, white, white 10%, #faa522);
    // background-color: #faa522;
    font-color: white;
    height: 70px;
    margin-top: 50px;
`;

const FooterLogoLink = styled(Link)`
    padding: 35px 0px;
    display: inline-block;
    margin-right: 5px;
    float: right;
    `;
    
    const FooterConnectLink = styled(Link)`
    display: inline-block;
    font-size: 2rem;
    color: #6a1f01;
    margin-left: 10px;
    padding: 35px 0px;

    :hover {
        text-decoration: underline;
        color: #6a1f01;
        transition: ease-in opacity 0.1s;
        opacity: 0.7;
    }
`

const Footer = () =>
    <StyledFooter>
        <FooterLogoLink to='/'>
            <img
                alt="Home"
                src={ontaplogo}
                width="100"
                height="30"
            />
        </FooterLogoLink>
        <FooterConnectLink to='/contact'>Start a conversation with us right away</FooterConnectLink>
    </StyledFooter>

export default Footer