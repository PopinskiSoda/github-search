const initState = {
	avatarUrl: null,
	currentPage: 1,
	1: [],
	rowsPerPage: 5,
	sort: {
		direction: 'asc',
		orderBy: 'full_name'	
	},
	errorMessage: null,
	lastPage: 1
}

// Парсим заголовок Link который вернул GithubAPI
//
// Пример:
// <https://api.github.com/user/2178735/repos?per_page=5&page=2&sort=full_name&direction=asc>;
// rel="next", <https://api.github.com/user/2178735/repos?per_page=5&page=2&sort=full_name&direction=asc>; rel="last"

const parseLastPage = (linkHeader) => {
	
	// Если заголовка нет - одна страница
	if (linkHeader == null) {
		return 1;
	}

	const relLast = linkHeader.split(',').find(rel => {
		return (rel.split(';')[1]) === ' rel="last"'
	});

	if (relLast) {
		const re = /&page=(\d*)/;
		const match = re.exec(relLast);
		return Number(match[1]);
	} else {
		return false;
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
			const lastPage = parseLastPage(action.headers.get('Link'));
			return {
				...state,
				[action.page]: action.response,
				currentPage: action.page || state.currentPage,
				avatarUrl: action.response[0] ? action.response[0].owner.avatar_url : null,
				errorMessage: null,
				lastPage: parseLastPage(action.headers.get('Link')) || state.lastPage
			}

		case 'FETCH_REPOS_FAILED':
			return {
				...state,
				errorMessage: action.message
			}

		default:
			return state;
	}
}

export default listReducer;