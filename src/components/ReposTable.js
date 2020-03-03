import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const ReposTable = () => {
	const repos = useSelector(state => state.reposList.repos);
	const dispatch = useDispatch();

	const dateHelper = (UTCString) => (new Date(UTCString)).toLocaleDateString();

	return (
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
	);
}

export default ReposTable;