import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const TableCell = ({ getValue, row, column, table }) => {
	const initialValue = getValue();
	const columnMeta = column.columnDef.meta;
	const tableMeta = table.options.meta;
	const [value, setValue] = useState("")


	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])

	const onBlur = () => {
		table.options.meta?.updateData(row.index, column.id, value)
	}

	const onSelectChange = (e) => {
		setValue(e.target.value);
		tableMeta?.updateData(row.index, column.id, e.target.value);
	};

	if (!tableMeta?.editedRows[row.id]) {
		switch (columnMeta.type) {
			case "id":
				// console.log('Value', value);
				// return <Link to={`/contact/${value}`} className='text-blue-800 underline font-bold' ><span>Edit {value} </span></Link>
				return <span> {value} </span>
		}
	}




	// if (tableMeta?.editedRows[row.id]) {
	// 	switch (columnMeta.type) {
	// 		case "id": return (<span> {value} </span>)
	// 		case "select": return (
	// 			<select onChange={onSelectChange} value={initialValue}>
	// 				{
	// 					columnMeta?.options?.map((option) => (
	// 						<option key={option.value} value={option.value}>{option.label}</option>
	// 					))
	// 				}
	// 			</select >)
	// 		default: return (
	// 			<input
	// 				value={value}
	// 				onChange={e => setValue(e.target.value)}
	// 				onBlur={onBlur}
	// 				className='border border-slate-400'
	// 				type={column.columnDef.meta?.type || "text"}
	// 			/>
	// 		)
	// 	}

	// }



	// if (tableMeta?.editedRows[row.id]) {
	//     return columnMeta.type === "select" ? (

	//         <select onChange={onSelectChange} value={initialValue}>
	//             {
	//                 columnMeta?.options?.map((option) => (
	//                     <option key={option.value} value={option.value}>{option.label}</option>
	//                 ))
	//             }
	//         </select >
	//     ) :
	//         (<input
	//             value={value}
	//             onChange={e => setValue(e.target.value)}
	//             onBlur={onBlur}
	//             className='border border-slate-400'
	//             type={column.columnDef.meta?.type || "text"}
	//         />)
	// }
	// if (tableMeta?.editedRows[row.id]) {
	//     return columnMeta.type === "id" && ( <span> Happy </span> )

	// }


	return <span>{value}</span>

}

export default TableCell
