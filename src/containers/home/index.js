import React from 'react';
import global from 'tools/global';
import Main from 'components/main';
import LoginProviders from 'components/login-providers';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { handleLogin } from 'redux-flow/reducers/auth/github/action-creators'
import styled from 'styled-components';

const Teste = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 40px;
`;

const Logo = styled.img`

`;

const ProjectName = styled.h1`
    font-size: 3em;
    font-family: ${global.font.black};
    width: 100%;
    text-align: center;
`;

const ProjectSummary = styled.p`
    font-size: 1.4em;
    text-align: center;
`;

const Home = ({ github, ...props }) => {
    return (
        <Main>
            <Teste>
                <Logo src={global.project.logo} />
                <ProjectName>{global.project.name}</ProjectName>
                <ProjectSummary>{global.project.summary}</ProjectSummary>
            </Teste>

            <LoginProviders
                githubHandleLogin={() => props.handleLogin(props.history)}
            />
                {/* <button onClick={() => props.handleLogin(props.history)}>Sign up with Github</button>
                <button onClick={() => props.handleLogin(props.history)}>Sign up with Google</button> */}
        </Main>
    )
};

const mapStateToProps = state => ({
    github: state.auth.github
})
const mapDispatchToProps = dispatch => bindActionCreators({ handleLogin }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)
