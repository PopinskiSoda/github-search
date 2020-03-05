const initState = {
	users: [],
	searchedUser: null,
	selectedUser: null,
	errorMessage: null,
}

const searchReducer = (state = initState, action) => {
	switch (action.type) {

		case 'FETCH_USERS_REQUESTED':
			return {
				...state,
				searchedUser: action.prefix
			}

		case 'FETCH_USERS_SUCCEEDED':
			return {
				...state,
				users: action.response.items,
				errorMessage: null
			}

		case 'FETCH_USERS_FAILED':
			return {
				...state,
				errorMessage: action.message
			}

		case 'SET_SELECTED_USER':
			return {
				...state,
				selectedUser: action.selectedUser 
			}

		default: 
			return state;
	}
}

export default searchReducer;