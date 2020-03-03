import { takeLatest, call, put, all } from 'redux-saga/effects';

export default function* watchSaga() {
	yield all([
		takeLatest('FETCH_USERS_REQUESTED', searchUsers),
		takeLatest('FETCH_REPOS_BY_USER_REQUESTED', getRepos)
	]);
}

function* searchUsers(action) {
	try {
		const response = yield call(fetchUsersByPrefix, action.prefix);
		yield put({type: 'FETCH_USERS_SUCCEEDED', response: response});
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
		const response = yield call(fetchRepos, action.userLogin);
		yield put({type: 'FETCH_REPOS_SUCCEEDED', response: response});
	} catch (e) {
		yield put({type: 'FETCH_REPOS_FAILED', message: e.message});
	}
}

function fetchRepos(userLogin) {
	return fetch(`https://api.github.com/users/${userLogin}/repos?per_page=100`).then(response =>
		response.json()
	);
}