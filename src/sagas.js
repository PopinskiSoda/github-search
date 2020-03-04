import { takeLatest, call, put, all, select } from 'redux-saga/effects';

export default function* watchSaga() {
	yield all([
		takeLatest('FETCH_USERS_REQUESTED', searchUsers),
		takeLatest('FETCH_REPOS_REQUESTED', getRepos)
	]);
}

function* searchUsers(action) {
	try {
		const response = yield call(fetchUsersByPrefix, action.prefix);
		yield put({type: 'FETCH_USERS_SUCCEEDED', response});
	} catch (e) {
		yield put({type: 'FETCH_USERS_FAILED', message: e.message})
	}
}

function fetchUsersByPrefix(prefix) {
	return fetch(`https://api.github.com/search/users?q=${prefix}`).then(response =>
		response.json()
	);
}

function* getRepos(action) {
	try {
		const currentUserLogin = yield select(state => state.reposList.currentUser.login);
		const currentPage = yield select(state => state.reposList.currentPage);
		const rowsPerPage = yield select(state => state.reposList.rowsPerPage);
		const orderBy = yield select(state => state.reposList.sort.orderBy);
		const direction = yield select(state => state.reposList.sort.direction);

		const response = yield call(fetchRepos, {
			userLogin: action.userLogin || currentUserLogin,
			page: action.page || currentPage,
			rowsPerPage: action.rowsPerPage || rowsPerPage,
			orderBy: action.orderBy || orderBy,
			direction: action.direction || direction
		});
		yield put({
			type: 'FETCH_REPOS_SUCCEEDED',
			response: response,
			page: action.page || currentPage
		});
	} catch (e) {
		yield put({type: 'FETCH_REPOS_FAILED', message: e.message});
	}
}

function fetchRepos(options) {
	const { userLogin, page, rowsPerPage, orderBy, direction } = options;
	return fetch(`https://api.github.com/users/${userLogin}/repos?per_page=${rowsPerPage}`
				 + `&page=${page}&sort=${orderBy}&direction=${direction}`)
		.then(response =>
			response.json()
		);
}