import React from 'react';
import { useSelector } from 'react-redux';
import './App/App.css';
import SearchBox from './SearchBox';
import UserCard from './UserCard';
import ReposTable from './ReposTable';
import Alert from '@material-ui/lab/Alert';

function App() {
	const errorMessage = useSelector(state => state.reposList.errorMessage);
	const reposLength = useSelector(state => state.reposList[1].length);

	return (
		<div className="App">
			<SearchBox />
			{errorMessage ? (
				<Alert severity="error">
					{(errorMessage === 'Not Found') ? 'Пользователь не найден' : errorMessage}
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
			)}
		</div>
	);
}

export default App;
