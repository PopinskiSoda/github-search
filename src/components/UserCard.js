import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import './UserCard/UserCard.scss';

const UserCard = () => {
	const userLogin = useSelector(state => state.usersList.selectedUser);
	const avatarUrl = useSelector(state => state.reposList.avatarUrl);

	return (
		<Paper className='UserCard'>
			<Avatar
				style={{width: '80px', height: '80px', marginRight: '16px'}}
				alt={userLogin}
				src={avatarUrl} />
			{userLogin}
		</Paper>
	);
}

export default UserCard;