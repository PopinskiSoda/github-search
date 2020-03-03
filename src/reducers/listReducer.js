const initState = {
	repos: []
}

const listReducer = (state = initState, action) => {
	switch (action.type) {

		case 'FETCH_REPOS_SUCCEEDED':
			return {
				...state,
				repos: action.response
			}

		case 'FETCH_REPOS_FAILED':
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