const initState = {
	users: [],
	selectedUser: null
}

const searchReducer = (state = initState, action) => {
	switch (action.type) {

		case 'FETCH_USERS_REQUESTED':
			return {
				...state,
				selectedUser: action.prefix
			}

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

		default: 
			return state;
	}
}

export default searchReducer;