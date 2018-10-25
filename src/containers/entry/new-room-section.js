import React from 'react';
import styled from 'styled-components';
import global from 'tools/global';
import Button from 'components/button';

const StyledNewRoomSection = styled.div`
	width: 100%;
	text-align: center;
`;

const Text = styled.p`
	color: #fff;
	font-size: 1.1em;
`;

const NewRoomSection = () => (
	<StyledNewRoomSection>
		<Text>{global.texts.newRoom}</Text>
		<Button center>New Room</Button>
	</StyledNewRoomSection>
);

export default NewRoomSection;
