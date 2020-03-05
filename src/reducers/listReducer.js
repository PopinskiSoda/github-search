const initState = {
	avatarUrl: null,
	currentPage: 1,
	1: [],
	rowsPerPage: 5,
	sort: {
		direction: 'asc',
		orderBy: 'full_name'	
	}
}

const listReducer = (state = initState, action) => {
	switch (action.type) {

		case 'FETCH_REPOS_REQUESTED':
			return {
				...state,
				sort: {
					orderBy: action.orderBy || state.sort.orderBy,
					direction: action.direction || state.sort.direction
				},
				rowsPerPage: action.rowsPerPage || state.rowsPerPage
			}

		case 'FETCH_REPOS_SUCCEEDED':
			return {
				...state,
				[action.page]: action.response,
				currentPage: action.page || state.currentPage,
				avatarUrl: action.response[0].owner.avatar_url
			}

		default:
			return state;
	}
}

export default listReducer;