import React, { Fragment } from 'react';
import global from 'tools/global';
import Main from 'components/main';
import LoginProviders from 'components/login-providers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { handleLogin as githubHandleLogin } from 'redux-flow/reducers/auth/github/action-creators';
import { handleLogin as googleHandleLogin } from 'redux-flow/reducers/auth/google/action-creators';
import styled from 'styled-components';
import Particles from 'components/particles';

const Project = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 40px;
`;

const ProjectName = styled.h1`
    font-size: 3em;
    font-family: ${global.font.black};
    width: 100%;
    text-align: center;
    color: #FFF;
`;

const ProjectSummary = styled.p`
    font-size: 1.4em;
    text-align: center;
    color: #FFF;
`;

const Home = ({ github, ...props }) => {
    return (
        <Fragment>
            <Particles />
            <Main>
                <Project>
                    <img src={global.project.logo} />
                    <ProjectName>{global.project.name}</ProjectName>
                    <ProjectSummary>{global.project.summary}</ProjectSummary>
                </Project>

                <LoginProviders {...props}/>
            </Main>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    github: state.auth.github,
    google: state.auth.google
})
const mapDispatchToProps = dispatch => bindActionCreators({
    githubHandleLogin,
    googleHandleLogin
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)
