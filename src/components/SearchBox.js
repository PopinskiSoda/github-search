import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBox = () => {
	const users = useSelector(state => state.usersList.users);
	const dispatch = useDispatch();
	let [searchValue, setSearchValue] = useState('');
	
	const DELAY = 300;
	const MIN_SEARCH_LENGTH = 3;
	const RETURN_KEY_CODE = 13;
	let timer;

	const handleChange = (value) => {
		setSearchValue(value.trim());

		if (searchValue.length >= MIN_SEARCH_LENGTH) {
			clearTimeout(timer);
			timer = setTimeout(
				() => dispatch({type: 'FETCH_USERS_REQUESTED', prefix: searchValue}),
				DELAY
			)
		}
	};

	const handleSelect = () => {
		if (searchValue.length >= MIN_SEARCH_LENGTH) {
			dispatch({type: 'FETCH_REPOS_BY_USER_REQUESTED', userLogin: searchValue});
		}
	}
	
	return (
		<Autocomplete
	        freeSolo
	        disableClearable
	        onKeyPress={(e) => {
	        	if (e.which === RETURN_KEY_CODE) {
	        		handleSelect()
	        	}
	        }}
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