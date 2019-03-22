import React from 'react'
import styled from 'styled-components'

const ContactPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: auto auto auto;
`

const Form = styled.form`
    margin-top: 1rem;
    margin-left: 20rem;
`
const Label = styled.label`
    font-size: 1.6rem;
    margin-top: 40px;
    color: #6a1f01;
`

const InputField = styled.input`
    font-size: 1.2rem;
    border-style: none;
    border-bottom: 1.5px solid #6a1f01;
    width: 20rem;
    :focus {
        outline: none;
    }
`

const Request = styled.textarea`
    font-size: 1.2rem;
    border-style: none;
    border-top: 1.5px solid #6a1f01;
    border-left: 1.5px solid #6a1f01;
    width: 40rem;
    height: 10rem;
    :focus {
        outline: none;
    }
`

const Submit = styled.input`
    border: none;
    background-color: #6a1f01;
    color: papayawhip;
    font-size: 1.6rem;
    margin-top: 20px;
    :hover {
        text-decoration: underline;
        opacity: 0.8;
    }
    :focus {
        outline: none;
    }
`



const Contact = () =>
    <Form action='https://formspree.io/foolishtest@outlook.com' method='POST'>
        <Label for='name'>Your Name</Label>
        <br />
        <InputField type='text' name='name' />
        <br />
        <Label for='email'>Your Email</Label>
        <br />
        <InputField type='email' name='email' />
        <br />
        <Label for='request'>Tell us a bit about your situation, needs and desires</Label>
        <br />
        <Request name='request' placeholder='Please include information to indicate that this request is genuine, and not spam.' />
        <br />
        <Submit type='submit' value='Send'/>
    </Form>


export default Contact