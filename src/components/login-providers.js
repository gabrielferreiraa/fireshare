import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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
        <GithubLoginButton onClick={props.githubHandleLogin} />
        <GoogleLoginButton onClick={props.googleHandleLogin} />
    </StyledLoginProviders>
);

LoginProviders.propTypes = {
    githubHandleLogin: PropTypes.func.isRequired,
    googleHandleLogin: PropTypes.func.isRequired
};

export default LoginProviders;
