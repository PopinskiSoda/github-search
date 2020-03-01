import { takeLatest, call, put } from 'redux-saga/effects';

export function* searchSaga() {
	yield takeLatest('FETCH_USERS_REQUESTED', searchUsers);
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