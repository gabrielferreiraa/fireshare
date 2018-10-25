import React from 'react';
import styled from 'styled-components';
import {
    GithubLoginButton,
    GoogleLoginButton
} from "react-social-login-buttons";

const StyledLoginProviders = styled.div`
    width: 100%;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginProviders = props => (
    <StyledLoginProviders>
        <GithubLoginButton onClick={() => props.githubHandleLogin(props.history)}/>
        <GoogleLoginButton onClick={() => props.googleHandleLogin(props.history)} />
    </StyledLoginProviders>
);

export default LoginProviders;
