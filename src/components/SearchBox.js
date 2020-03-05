import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBox = () => {
	const users = useSelector(state => state.usersList.users);
	const dispatch = useDispatch();
	let [searchValue, setSearchValue] = useState('');
	
	const DELAY = 600;
	const MIN_SEARCH_LENGTH = 3;
	const RETURN_KEY_CODE = 13;
	const searchTimer = useRef(false);

	const handleChange = (value) => {
		setSearchValue(value.trim());
	};

	useEffect(() => {
		if (searchValue.length >= MIN_SEARCH_LENGTH) {
			clearTimeout(searchTimer.current);
			searchTimer.current = setTimeout(
				() => dispatch({type: 'FETCH_USERS_REQUESTED', prefix: searchValue}),
				DELAY
			)
		}
		return () => {
			clearTimeout(searchTimer.current)
		}
	}, [searchValue, dispatch])

	const handleSelect = (value) => {
		let trimmedValue = value.trim();

		if (trimmedValue.length >= MIN_SEARCH_LENGTH) {
			setSearchValue(trimmedValue);
			dispatch({type: 'FETCH_REPOS_REQUESTED', userLogin: trimmedValue});
		}
	}
	
	return (
		<Autocomplete
	        freeSolo
	        disableClearable
	        onChange={(e, value) => {handleSelect(value)}}
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