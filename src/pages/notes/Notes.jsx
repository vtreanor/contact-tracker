import React from 'react'
import columns from './noteColumns,jsx';
import { getContact, getNotes } from '../../connections';
import { useState, useEffect } from 'react'
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaReply, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { TfiNotepad } from "react-icons/tfi";
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel } from '@tanstack/react-table'
import "../../css/table.css";


export async function loader({ params }) {
	const contact_id = params.id

	const notes = await getNotes(params.id)
	const contact = await getContact(params.id);
	return { contact, notes, contact_id };

}



const Notes = () => {

	// console.log('cols', columns)

	const { contact } = useLoaderData();
	const { notes } = useLoaderData()
	const { contact_id } = useLoaderData()
	const navigate = useNavigate();
	const { id, first_name, last_name, address_1, address_2, address_3, address_4, eircode, mobile, email, password, created_on, last_login } = contact;
	const { note_id, owner_id, date_created, data_modified, entry } = notes;

	const [data, setData] = useState(() => [...notes]);
	const [editedRows, setEditedRows] = useState({});
	const [originalData, setOriginalData] = useState(() => [...notes]);
	const purpose = 'note'

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		meta: {
			editedRows,
			setEditedRows,
			purpose,
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
			doStuff: () => {
				return;
			}
		},
	});

	if (contact === null) return (
		<div className='flex justify-center '>
			<h1>No Contact found id: {contact_id}  </h1>
			<div className='p-3 cursor-pointer' onClick={() => { navigate(-1) }}>
				<FaReply size={30} />
			</div>
		</div>
	)

	if (notes === null) return <h1>No Notes</h1>

	return (
		<div className=' flex flex-col w-[60%] rounded-xl p-8 pb-5 mx-auto  border-brandGreen border-4'>

			{/* Header bar */}
			<div className='iconBar bg-brandGreen'>
				<h1>Notes list for {contact.first_name} {contact.last_name}</h1>
				<div className="flex">
					<FaReply className='icon cursor-pointer' onClick={() => navigate(-1)} />
					<Link to={`/note/create/${id}`} className="px-3" > <FaPlusCircle className='icon' /></Link>
				</div>
			</div>

			<div className='tableContainer items-center'>
				{!table.getRowModel().rows.length ? <h1>No notes yet</h1> :
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
						))
						}

					</tbody>
				</table>
}
			</div>


		</div>
	)
}

export default Notes
