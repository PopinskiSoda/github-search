import React from 'react';
import { useSelector } from 'react-redux';
import './App/App.scss';
import SearchBox from './SearchBox';
import UserCard from './UserCard';
import ReposTable from './ReposTable';
import Alert from '@material-ui/lab/Alert';

function App() {
	const reposErrorMessage = useSelector(state => state.reposList.errorMessage);
	const searchErrorMessage = useSelector(state => state.usersList.errorMessage);
	const reposLength = useSelector(state => state.reposList[1].length);

	return (
		<div className="App">
			<SearchBox />
			{searchErrorMessage ? (
				<Alert severity="error">{searchErrorMessage}</Alert>
			) : (
				reposErrorMessage ? (
					<Alert severity="error">
						{(reposErrorMessage === 'Not Found') ? 'Пользователь не найден' : reposErrorMessage}
					</Alert>
				) : (
					(reposLength === 0) ? (
						<Alert severity="info">Тут нет репозиториев Q( ' - ' Q)</Alert>
					) : (
						<>
							<UserCard />
							<ReposTable />
						</>
					)
				)
			)}
		</div>
	);
}

export default App;
