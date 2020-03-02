const initState = {
	repos: []
}

const listReducer = (state = initState, action) => {
	switch (action.type) {
		// case 'SORT_ASC':
		// 	return {
		// 		...state,
		// 		test: 'test'
		// 	}

		// case 'SORT_DESC':
		// 	return {
		// 		...state,
		// 		test: 'test'
		// 	}

		case 'FETCH_REPOS_BY_USER_SUCCEEDED':
			console.log(action.response);
			return {
				...state,
				repos: action.response
			}

		case 'FETCH_REPOS_BY_USER_FAILED':
			return {
				...state
			}

		case 'SELECT_NEXT_PAGE':
			return {
				...state,
				test: 'test'
			}

		case 'SELECT_PREVIOUS_PAGE':
			return {
				...state,
				test: 'test'
			}

		default:
			return state;
	}
}

export default listReducer;