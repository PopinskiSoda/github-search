import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const Avatar = ({userLogin, avatarUrl}) => {
	return (
		<Avatar alt={userLogin} src={userLogin} />
	);
}

export default Avatar;