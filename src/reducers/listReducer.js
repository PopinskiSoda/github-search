const initState = {
	currentUserLogin: null,
	currentPage: 1,
	1: [],
	rowsPerPage: 5
}

const listReducer = (state = initState, action) => {
	switch (action.type) {

		case 'FETCH_REPOS_REQUESTED':
			return {
				...state,
				currentUserLogin: action.userLogin || state.currentUserLogin
			}

		case 'FETCH_REPOS_SUCCEEDED':
			return {
				...state,
				[action.page]: action.response,
				currentPage: action.page || state.currentPage
			}

		case 'SET_ROWS_PER_PAGE_AMOUNT':
			return {
				...state,
				rowsPerPage: action.amount
			}

		default:
			return state;
	}
}

export default listReducer;