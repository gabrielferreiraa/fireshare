import React from 'react';
import styled from 'styled-components';
import global from 'tools/global';
import Field from 'components/field';
import Button from 'components/button';

const StyledExistingRoomSection = styled.div`
  margin-top: 50px;
  width: 100%;
  text-align: center;
`;

const Fields = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  color: #fff;
  font-size: 1.1em;
`;

const ExistingRoomSection = () => (
  <StyledExistingRoomSection>
    <Text>{global.texts.enterRoom}</Text>
    <Fields>
      <Field placeholder="Room code" />
      <Button>Enter</Button>
    </Fields>
  </StyledExistingRoomSection>
);

export default ExistingRoomSection;
