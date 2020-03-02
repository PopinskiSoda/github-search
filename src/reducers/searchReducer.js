const initState = {
	users: []
}

const searchReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_USERS_SUCCEEDED':
			return {
				...state,
				users: action.response.items
			}

		case 'FETCH_USERS_FAILED':
			return {
				...state,
				test: 'test'
			}

		case 'SELECT_USER':
			return {
				...state,
				selectedUser: action.userLogin
			}

		default: 
			return state;
	}
}

export default searchReducer;