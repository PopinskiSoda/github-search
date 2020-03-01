const initState = {
	repos: []
}

const listReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SORT_ASC':
			return {
				...state,
				test: 'test'
			}

		case 'SORT_DESC':
			return {
				...state,
				test: 'test'
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