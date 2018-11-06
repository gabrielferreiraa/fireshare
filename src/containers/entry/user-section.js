import React from "react";
import Avatar from "components/avatar";
import styled from "styled-components";
import global from "tools/global";

const WelcomeText = styled.h1`
    width: 100%;
    font-family: ${global.font.light};
    color: #fff;
`;

const StyledUserSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
`;

const UserSection = ({ user }) => (
    <StyledUserSection>
        <Avatar picture={user.avatar} name={user.name} />
        <WelcomeText>Hi, {user.name}</WelcomeText>
    </StyledUserSection>
);

export default UserSection;
