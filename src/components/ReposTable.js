import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const ReposTable = () => {
	const dispatch = useDispatch();

	const currentPage = useSelector(state => state.reposList.currentPage);
	const repos = useSelector(state => state.reposList[currentPage]);
	const rowsPerPage = useSelector(state => state.reposList.rowsPerPage);
	const sortDirection = useSelector(state => state.reposList.sort.direction);
	const orderBy = useSelector(state => state.reposList.sort.orderBy);

	const dateHelper = (UTCString) => (new Date(UTCString)).toLocaleDateString();

	const handleChangeRowsPerPage = (event) => {
		dispatch({type: 'FETCH_REPOS_REQUESTED', rowsPerPage: Number(event.target.value)});
	}

	const handleChangePage = (event, newPage) => {
		dispatch({type: 'FETCH_REPOS_REQUESTED', page: newPage});
	}

	const handleChangeSort = (event, orderSelector) => {
		let direction;
		if (orderSelector === orderBy) {
			if (sortDirection === 'asc') {
				direction = 'desc';
			} else {
				direction = 'asc';
			}
		} else {
			direction = 'asc';
		}

		dispatch({
			type: 'FETCH_REPOS_REQUESTED',
			orderBy: orderSelector,
			direction: direction
		});
	}

	const createSortHandler = orderSelector => event => {
		handleChangeSort(event, orderSelector);
	}

	const headColumns = [
		{label: 'Login', orderSelector: 'full_name'},
		{label: 'Language'},
		{label: 'Created at', orderSelector: 'created'},
		{label: 'Updated at', orderSelector: 'updated'},
		{label: 'Pushed at', orderSelector: 'pushed'},
	]

	return (
		<Paper>
			<Table>
				<TableHead>
					<TableRow>
					{headColumns.map(column => {
						return (
							<TableCell>
								{column.orderSelector ? (
									<TableSortLabel
										active={orderBy === column.orderSelector}
										onClick={createSortHandler(column.orderSelector)}
										direction={sortDirection}>
										{column.label}
									</TableSortLabel>
								) : (
									column.label
								)}
							</TableCell>
						)
					})}
					</TableRow>
				</TableHead>
				<TableBody>
					{repos.map((row) => {
						return (
							<TableRow key={row.id}>
								<TableCell>
									<Link href={row.html_url} target="_blank">{row.name}</Link>
								</TableCell>
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
	          labelDisplayedRows={({from, to}) => `${from - 1} из более чем ${to}`}
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