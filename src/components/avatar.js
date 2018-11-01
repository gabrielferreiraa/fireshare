import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const Avatar = ({ picture, name }) => <StyledImage src={picture} alt={name} title={name} />;

Avatar.defaultProps = {
  picture: '/images/avatar.png',
  name: 'friend',
};

Avatar.propTypes = {
  picture: propTypes.string,
  name: propTypes.string,
};

export default Avatar;
