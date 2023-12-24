import React from 'react'
import { redirect, useNavigate, useLoaderData, Link } from 'react-router-dom'
import { getNote, deleteNote, getContact } from '../../connections'
import { FaReply, FaTrash, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import "../../css/form.css";

export async function loader({ params }) {
    const id = params.id
    const owner_id = params.owner_id
	const note = await getNote(params.id);
	return { note };
}

const NoteDelete = () => {
    const { note } = useLoaderData();    
	const { id, owner_id, date_created, date_modified, entry} = note[0];
	const navigate = useNavigate();

	return (
        <div className=' flex flex-col w-[60%] rounded-xl p-8 pb-5 mx-auto  border-brandGreen border-4'>
		<div className='formContainer items-center'>
			<div className='flex flex-col  w-[80%] mx-auto justify-center p-5 rounded-[20px] '>
				<h1>Are you sure you want to delete this note ?</h1>
				<h3 className='py-10 text-left'> {entry} </h3>
				<div className='w-full  p-2 rounded-xl mt-8 flex self-center justify-center'>
                    <FaTrash className='w-16 h-16 px-4 fill-brandGreen' onClick={() => {
							deleteNote({ id })
							navigate(`/notes/${owner_id}`);
						}}/>
                    <FaReply className='w-16 h-16 px-4 fill-brandGreen' onClick={() => { navigate(-1) }} />
				</div>

			</div>
		</div>
        </div>
	)
}

export default NoteDelete
