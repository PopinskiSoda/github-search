import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBox = () => {
	const users = useSelector(state => state.usersList.users);
	const dispatch = useDispatch();
	
	const DELAY = 300;
	const MIN_SEARCH_LENGTH = 3;
	let timer;

	const handleChange = (value) => {
		if (value.length >= MIN_SEARCH_LENGTH) {
			clearTimeout(timer);
			timer = setTimeout(
				() => dispatch({type: 'FETCH_USERS_REQUESTED', prefix: value.trim()}),
				DELAY
			)
		}
	};
	
	return (
		<Autocomplete
	        freeSolo
	        disableClearable
	        options={users.map(user => user.login)}
	        renderInput={params => (
	          <TextField
	            {...params}
	            onChange={e => handleChange(e.target.value)}
	            label="Кого ищем?"
	            margin="normal"
	            variant="outlined"
	            InputProps={{ ...params.InputProps, type: 'search' }}
	          />
	        )}
	      />
	)
}

export default SearchBox;