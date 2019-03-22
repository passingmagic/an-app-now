import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    margin-top: 1rem;
    margin-left: 20rem;
`
const Label = styled.label`
    font-size: 1.8rem;
    `
    
    const InputField = styled.input`
    font-size: 1.6rem;
    border-style: none;
    border-bottom: 2px solid #6a1f01;
    width: 20rem;
    `
    
    const Request = styled.textarea`
    font-size: 1.6rem;
    border-style: none;
    border-top: 2px solid #6a1f01;
    border-left: 2px solid #6a1f01;
    width: 40rem;
    height: 10rem;
`


const ContactForm = () =>
    <Form action='https://formspree.io/foolishtest@outlook.com' method='POST'>
        <Label for='name'>Your Name</Label>
        <InputField type='text' name='name' />
        <Label for='email'>Your Email/</Label>
        <InputField type='email' name='email' />
        <Label for='request'>A few sentences about your situation, needs and desires</Label>
        <Request name='request' placeholder='Do give us a couple of quick sentences about your needs. Please include information that shows that this request is genuine, and not spam.' />
    </Form>

export default ContactForm