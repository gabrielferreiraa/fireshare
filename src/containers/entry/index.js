import React, { Fragment } from 'react';
import Main from 'components/main';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Separator from 'components/separator';
import Particles from 'components/particles';
import Back from 'components/back';
import UserSection from './user-section';
import ExistingRoomSection from './existing-room-section';
import NewRoomSection from './new-room-section';

const EntryWrapper = styled.div`
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Entry = ({ user }) => (
  <Fragment>
    <Back />
    <Particles />
    <Main>
      <EntryWrapper>
        <UserSection user={user} />
        <ExistingRoomSection />
        <Separator />
        <NewRoomSection />
      </EntryWrapper>
    </Main>
  </Fragment>
);

const mapStateToProps = state => ({
  user: state.user.data,
});
export default connect(mapStateToProps)(Entry);
