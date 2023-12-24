import { useState, useEffect } from 'react'
// import columns from './columns';
import columns from './cols'
// import defaultData from './DefaultData';
import { getContacts, getNoteCount, getNames } from '../../connections'
import "../../css/table.css";
import { FaReply, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { TfiNotepad } from "react-icons/tfi";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel } from '@tanstack/react-table'

export async function loader() {
	const contacts = await getContacts();
	return contacts;
}

const Contacts = () => {
	const contacts = useLoaderData();
	const [data, setData] = useState(() => [...contacts]);
	const [editedRows, setEditedRows] = useState({});
	const [originalData, setOriginalData] = useState(() => [...contacts]);
	const fred = {first: 1, second: 2, third: 3}
	const purpose = 'notes'
	const navigate = useNavigate();

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		meta: {
			editedRows,
			setEditedRows,
			purpose,
			fred,
			revertData: (rowIndex, revert) => {
				if (revert) {
					setData((old) =>
						old.map((row, index) =>
							index === rowIndex ? originalData[rowIndex] : row
						)
					);
				} else {
					setOriginalData((old) =>
						old.map((row, index) => (index === rowIndex ? data[rowIndex] : row))
					);
				}
			},

			updateData: (rowIndex, columnId, value) => {
				setData((old) =>
					old.map((row, index) => {
						if (index === rowIndex) {
							return {
								...old[rowIndex],
								[columnId]: value,
							};
						}
						return row;
					})
				);
			},
			doStuff: (softStuff, hardStuff) => {
				return;
			}
		},
	});



	const doSomething = () => {
		const newRow = { studentId: 32, name: 'Wooden Drawers', dateOfBirth: '11-01-1951', major: 'Sock Holder' }
		// console.log(newRow)
		const newData = [...data, newRow]

		setData(newData)
	}

	// console.log(data)
	return (

		<div className='tableContainer items-center'>

			<div className='iconBar bg-brandGreen'>
				<h1>Contacts summary</h1>
				<div className="flex gap-[15px]">
					<FaReply onClick={() => {navigate(-1)}} className='icon cursor-pointer  '/>					
					<Link to={`/newcontactform`}> <FaPlusCircle className='icon cursor-pointer' /></Link>
				</div>
			</div>

			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id} className='text-center border-x-2'>
									{header.isPlaceholder
										? null
										: flexRender(
											header.column.columnDef.header,
											header.getContext()											
										)}
								</th>
							)
							)}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id} className='text-left'>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
						
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Contacts
