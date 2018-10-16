import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { handleLogin } from 'redux-flow/reducers/auth/github/action-creators'

const Home = ({ github, ...props }) => {
    return (
        <div>
            <button onClick={() => props.handleLogin(props.history)}>Logar</button>
            {github.isFetching && 'carregando github'}
        </div>
    )
};

const mapStateToProps = state => ({
    github: state.auth.github
})
const mapDispatchToProps = dispatch => bindActionCreators({ handleLogin }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)
