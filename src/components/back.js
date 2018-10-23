import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBack = styled(Link)`
	position: fixed;
	top: 20px;
	left: 20px;
	z-index: 2;
	background-color: transparent;
	color: #fff;
	border: none;
	cursor: pointer;
	text-decoration: none;
    transition: transform 200ms ease;

    span {
        transition: transform 200ms, opacity 300ms ease;
        opacity: 0;
        transform: translateX(-10px);
    }

    &:hover {
        transform: translateX(10px);

        span {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

const Back = () => (
	<StyledBack to="/" title="Back to home">
		<span>&lsaquo;</span> back
	</StyledBack>
);

export default Back;
