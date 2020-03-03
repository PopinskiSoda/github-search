import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

const ReposTable = () => {
	const dispatch = useDispatch();

	const currentPage = useSelector(state => state.reposList.currentPage);
	const repos = useSelector(state => state.reposList[currentPage]);
	console.log(currentPage);
	console.log(useSelector(state => state.reposList));
	const rowsPerPage = useSelector(state => state.reposList.rowsPerPage);

	const dateHelper = (UTCString) => (new Date(UTCString)).toLocaleDateString();

	const handleChangeRowsPerPage = (event) => {
		dispatch({type: 'SET_ROWS_PER_PAGE_AMOUNT', amount: Number(event.target.value)});
	}

	const handleChangePage = (event, newPage) => {
		dispatch({type: 'FETCH_REPOS_REQUESTED', page: newPage});
	}

	return (
		<Paper>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Login</TableCell>
						<TableCell>Language</TableCell>
						<TableCell>Created at</TableCell>
						<TableCell>Updated at</TableCell>
						<TableCell>Pushed at</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{repos.map((row) => {
						return (
							<TableRow key={row.id}>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.language}</TableCell>
								<TableCell>{dateHelper(row.created_at)}</TableCell>
								<TableCell>{dateHelper(row.updated_at)}</TableCell>
								<TableCell>{dateHelper(row.pushed_at)}</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
			<TablePagination
	          rowsPerPageOptions={[5, 10, 25]}
	          labelRowsPerPage="Репозиториев на странице"
	          component="div"
	          count={-1}
	          rowsPerPage={rowsPerPage}
	          page={currentPage}
	          onChangeRowsPerPage={handleChangeRowsPerPage}
	          onChangePage={handleChangePage}
	        />
        </Paper>
	);
}

export default ReposTable;