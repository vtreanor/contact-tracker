import React, { useMemo } from 'react'
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel } from '@tanstack/react-table'
import { Link, redirect } from "react-router-dom";


export default function BasicTable({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const logRow = (row) => {
    // console.log('Row Click', row)
    // console.log('index', row.original.id)
    const id = row.original.id

    // window.location.href = `/person/${id}`;
    // <Link to={`/person/${id}`}>  </link>

  }

  const logCell = (cell) => {
    // console.log('Row Click', cell)
    // console.log('cell name', cell.getContext().getValue())
    // const id = row.original.id

    // window.location.href = `/person/${id}`;
    // <Link to={`/person/${id}`}>  </link>

  }

  const isTrue = true

  return (
    <div className=''>
      <table className='w3-table-all'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className='w3-green'>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>

          {table.getRowModel().rows.map(row => (


            // <tr key={row.id} onClick={ () => logRow(row) } >
            <tr key={row.id} >

              {row.getVisibleCells().map(cell => (
                <td key={cell.id} onClick={ () => logCell(cell)} >
                {/* <td key={cell.id}  > */}
                 
                  {cell.column.id === 'id' ?
                    <Link to={`/person/${cell.getContext().getValue()}`} className='text-blue-800 underline' >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Link> : 
                    flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}

            </tr>

            // </Link>  
          ))}
        </tbody>
      </table>
      <div className='mt-3 flex'>
        <button className='w3-button w3-white w3-border w3-border-red w3-round-large' onClick={() => table.setPageIndex(0)}>First page</button>
        <button className='w3-button w3-white w3-border w3-border-red w3-round-large' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous page</button>
        <button className='w3-button w3-white w3-border w3-border-red w3-round-large' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next page</button>
        <button className='w3-button w3-white w3-border w3-border-red w3-round-large' onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Last page</button>
      </div>
    </div>
  )
}
