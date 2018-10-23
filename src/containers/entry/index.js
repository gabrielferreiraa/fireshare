import React, { Fragment } from 'react';
import Main from 'components/main';
import styled from 'styled-components';
import UserSection from './user-section';
import ExistingRoomSection from './existing-room-section';
import NewRoomSection from './new-room-section';
import Separator from 'components/separator';
import Particles from 'components/particles';
import { connect } from 'react-redux';

const EntryWrapper = styled.div`
	width: 80%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Entry = ({ user }) => (
	<Fragment>
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

const mapStateToProps = (state) => ({
	user: state.user.data
});
export default connect(mapStateToProps)(Entry);
