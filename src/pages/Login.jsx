import React from 'react'
import styled from 'styled-components'

const LoginPageLayout = styled.div`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: auto auto auto;
`
const LoginForm = styled.form`
    margin-top: 1rem;
    margin-left: 20rem;
`

const LoginLabel = styled.label`
    font-size: 1.8rem;
    margin-top: 40px;
    color: #6a1f01;
`
const LoginField = styled.input`
    font-size: 1.6rem;
    border-style: none;
    border-bottom: 1.5px solid #6a1f01;
    width: 20rem;

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
const LoginUnregisteredMessage = styled.p`
    margin-top:20px;
    color: red;
    visibility: ${props => props.loginError ? 'visible' : 'hidden'};
`

function onLogin() {
    this.LoginUnregisteredMessage.props.loginError = true;
}

const Login = () =>
    <LoginPageLayout>
        <LoginForm action='javascript:onLogin()'>
            <LoginLabel row={1} for='username'>Email</LoginLabel>
            <br />
            <LoginField row={2} type='email' name='username' />
            <br />
            <LoginLabel row={3} for='password'>Password</LoginLabel>
            <br />
            <LoginField row={4} type='password' name='password' />
            <br />
            <Submit row={5} type='submit' value='Login' />
            <br />
            <LoginUnregisteredMessage>If you aren't our client yet, contact us to get onTap!</LoginUnregisteredMessage>
        </LoginForm>
    </LoginPageLayout>


export default Login