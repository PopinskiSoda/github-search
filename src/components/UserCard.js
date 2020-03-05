import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const UserCard = () => {
	const userLogin = useSelector(state => state.usersList.selectedUser);
	const avatarUrl = useSelector(state => state.reposList.avatarUrl);

	return (
		<Paper>
			<Avatar alt={userLogin} src={avatarUrl} />
			{userLogin}
		</Paper>
	);
}

export default UserCard;