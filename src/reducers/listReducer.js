const initState = {
	currentUser: {
		login: null,
		avatarUrl: null
	},
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
				currentUser: {
					...state.currentUser,
					login: action.userLogin || state.currentUser.login
				},
				rowsPerPage: action.rowsPerPage || state.rowsPerPage
			}

		case 'FETCH_REPOS_SUCCEEDED':
			return {
				...state,
				[action.page]: action.response,
				currentPage: action.page || state.currentPage,
				currentUser: {
					...state.currentUser,
					avatarUrl: action.response[0].owner.avatar_url
				} 
			}

		default:
			return state;
	}
}

export default listReducer;