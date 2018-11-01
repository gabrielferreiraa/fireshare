import React from "react";
import styled from "styled-components";
import global from "tools/global";

const StyledField = styled.input`
    padding: 15px;
    font-family: ${global.font.medium};
    border: 2px solid #fff;
    color: #fff;
    height: ${global.fields.height};
    outline: none;
    border-radius: 5px;
    font-size: 1.4em;
    text-align: center;
    background-color: transparent;

    &::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.3);
    }
`;

const Field = ({ type, ...props }) => <StyledField type={type} {...props} />;

Field.defaultProps = {
    type: "text"
};

export default Field;
