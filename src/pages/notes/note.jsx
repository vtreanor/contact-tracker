import React from 'react'
import { getContact, getNote } from '../../connections';
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaReply, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { TfiNotepad } from "react-icons/tfi";
import { DateTime } from 'luxon';
import "../../css/form.css";

export async function loader({ params }) {
	const note_id = params.id
	const note = await getNote(note_id)
	console.log('note loader', note)
	const owner_id = note[0].owner_id
	const contact = await getContact(owner_id);
	return { contact, note, note_id };
}


const Note = () => {
	const { contact } = useLoaderData();
	const { note } = useLoaderData();
	const { contact_id } = useLoaderData()
	const navigate = useNavigate();

	if (contact === null) return (
		<div className='flex justify-center '>
		<h1>No Contact found id: {contact_id}  </h1>
		<div className='p-3 cursor-pointer' onClick={() => {navigate(-1)}}>
			<FaReply size={30} />
		</div>
		</div>
	)

	
	const { first_name, last_name, address_1, address_2, address_3, address_4, eircode, mobile, email, notes, password, created_on, last_login } = contact;
	const { id, owner_id, date_created, date_modified, entry } = note[0]
	console.log('Note', note[0].entry)

	const createDate = DateTime.fromISO(date_created).toLocaleString(DateTime.DATE_MED)
	const modifiedDate = DateTime.fromISO(date_modified).toLocaleString(DateTime.DATE_MED)

	return (
		<div className=' flex flex-col w-[60%] rounded-xl p-8 pb-5 mx-auto  border-brandGreen border-4'>

			<div className='iconBar bg-brandGreen'>
				<h1>Note read only - {first_name} {last_name}</h1>
				<div className="flex">

					<FaReply className='icon cursor-pointer' onClick={() => navigate(-1)} />

					<Link to={`/note/edit/${id}/${owner_id}`} className="px-3" > <FaEdit className='icon' /></Link>
				</div>
			</div>


			<div className='formContainer items-center'>
				<div className="flex flex-col w-full">
					<div className='flex w-full justify-evenly rounded-xl'>

						<div className='flex flex-col items-end border-0 rounded-lg mb-5 w-[90%]'>
							<div className='inputDiv'>
								<div>Owner Id</div>
								<div className="border border-slate-400"> {owner_id} </div>
							</div>
							<div className='inputDiv'>
								<div>Date Created</div>
								<div className="border border-slate-400"> {createDate} </div>
							</div>
							<div className='inputDiv'>
								<div>Date Modified</div>
								<div className="border border-slate-400"> {modifiedDate} </div>
							</div>
							<div className='inputDiv'>
								<div>Note</div>
								<div className="border border-slate-400"> {entry} </div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Note
