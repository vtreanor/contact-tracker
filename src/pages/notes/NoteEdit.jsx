import React from 'react'
import { getContact, getNote, updateNote, deleteNote } from '../../connections'
import { Form, Link, useLoaderData, useNavigate, redirect } from "react-router-dom";
import { FaReply, FaSave, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { DateTime } from 'luxon';
import "../../css/form.css";


export async function loader({ params }) {
	const note_id = params.id
	console.log('params', params)
	const note = await getNote(note_id)
	console.log('note edit loader', note)
	const owner_id = note[0].owner_id
	const contact = await getContact(owner_id);
	return { contact, note, note_id };
}

export async function action({ request, params }) {
	const id = params.id
	const owner_id = params.owner_id
	const formData = await request.formData();
	const newData = Object.fromEntries(formData);
	console.log('newData', newData)
	console.log('params', params)
	await updateNote(id, newData);
	return redirect(`/notes/${owner_id}`);
}

const NoteEdit = () => {

	const { contact } = useLoaderData();
	const { note } = useLoaderData();
	const { contact_id } = useLoaderData()
	const navigate = useNavigate();
	const { first_name, last_name, address_1, address_2, address_3, address_4, eircode, mobile, email, notes, password, created_on, last_login } = contact;
	const { id, owner_id, date_created, date_modified, entry } = note[0]

	return (

		<div className=' flex flex-col w-[60%] rounded-xl p-8 pb-5 mx-auto  border-brandGreen border-4'>

			<div className='formContainer items-center'>

				<Form className='flex flex-col w-full' method='PUT' id='editContactForm'>

					<div className='iconBar bg-brandGreen'>
						<h1>Note edit - {first_name} {last_name}</h1>
						<div className="flex items-center ">
							<FaReply className='icon cursor-pointer' onClick={() => navigate(-1)} />
							<button className='!border-0 !w-10 ' type='submit'>
								<FaSave className='icon' />
							</button>

							<Link to={`/note/delete/${id}`} className="" > <FaTimesCircle className='icon' /></Link>

							{/* <FaTimesCircle className='icon cursor-pointer ml-[20px]' onClick={() => {
								deleteNote({id})	
								navigate(`/notes/${owner_id}`)
							}} /> */}
						</div>
					</div>



					<div className='border-02 p-3 rounded-lg form-panel'>
						<div className='flex flex-col items-end border-0 rounded-lg mb-5'>

							<div className='flex flex- self-center flex-col'>
								<div className='inputDiv'>
									<label>Note ID</label>
									<input className='border border-slate-400' type="text" name='note_id' defaultValue={id} />
								</div>
								<div className='inputDiv'>
									<label>Owner ID</label>
									<input className='border border-slate-400' type="text" name='owner_id' defaultValue={owner_id} />
								</div>

								<div className='inputDiv'>
									<label>Date created</label>
									<input className='border border-slate-400' type="text" name='date_created' defaultValue={date_created} />
								</div>

								<div className='inputDiv'>
									<label>Date modified</label>
									<input className='border border-slate-400' type="text" name='date_modified' defaultValue={date_modified} />
								</div>
							</div>


							<div className='inputDiv !items-start'>
								{/* <label className='place-content-start '>Note</label> */}
								<textarea cols="80" rows="10" className='border border-slate-400 p-5' type="text" name='entry' defaultValue={entry} />
							</div>

						</div>

					</div>

				</Form>


			</div>


		</div>

	)
}

export default NoteEdit
