import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const createData = (name, stars) => { return { name, stars }}

// const rows = [
// 	createData('Test1', 1337),
// 	createData('Test2', 1338),
// 	createData('Test3', 1339),
// 	createData('Test4', 13310),
// 	createData('Test5', 133123),
// 	createData('Test6', 1312337),
// 	createData('Test7', 55132337)
// ]

const ReposTable = () => {
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>
						headTest
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell>
						bodyTest
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}

export default ReposTable;