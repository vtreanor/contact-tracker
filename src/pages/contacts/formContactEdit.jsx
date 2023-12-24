import React from 'react'
import { getContact } from "../../connections";
import { Form, Link, useLoaderData, useNavigate, redirect } from "react-router-dom";
import { updateContact } from '../../connections';
import { FaReply, FaSave, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { TfiNotepad } from "react-icons/tfi";
import "../../css/form.css"

export async function action({ request, params }) {
	const id = params.id
	const formData = await request.formData();
	const newData = Object.fromEntries(formData);
	console.log('newData', newData)
	console.log('parans', params)
	await updateContact(id, newData);
	return redirect('/contacts');
}

export async function loader({ params }) {
	const contact = await getContact(params.id);
	console.log('contact', contact)
	return { contact };
}

const FormContactEdit = () => {
	const { contact } = useLoaderData();
	const { id, first_name, last_name, address_1, address_2, address_3, address_4, eircode, mobile, email, notes, password, created_on, last_login } = contact;
	const navigate = useNavigate();

	return (
		<div className=' flex flex-col w-[60%] rounded-xl p-8 pb-5 mx-auto  border-brandGreen border-4'>

			{/* <div className='iconBar bg-brandGreen'>
				<h1>Edit Contact {first_name} {last_name}</h1>
				<div className='flex'>
					<Link to={`/contactdelete/${id}`} className="" > <FaTimesCircle className='icon' /></Link>
					<Link to={``} className="" > <TfiNotepad className='icon' /></Link>
				</div>
			</div> */}


			<div className='formContainer items-center'>

				<Form className='flex flex-col w-full' method='PUT' id='editContactForm'>

					<div className='iconBar bg-brandGreen'>
						<h1>Edit Contact {first_name} {last_name}</h1>

						<div className='flex gap-[10px] items-center'>							
							<FaReply className='icon' onClick={() => { navigate(-1) }} />
							<button className='!border-0 !w-10 !ml-0' type='submit'>
								<FaSave className='icon' />
							</button>
							<Link to={`/contactdelete/${id}`} className="" > <FaTimesCircle className='icon' /></Link>
						</div>
					</div>

					<div className='flex w-full justify-evenly rounded-xl'>

						<div className='border-0 p-3 rounded-lg form-panel'>
							<div className='flex flex-col items-end border-0 rounded-lg mb-5'>
								<div className='inputDiv'>
									<label>First Name</label>
									<input className='border border-slate-400' type="text" name='first_name' defaultValue={first_name} />
								</div>
								<div className='inputDiv'>
									<label>Last Name</label>
									<input className='border border-slate-400' type="text" name='last_name' defaultValue={last_name} />
								</div>
							</div>

							<div className='flex flex-col items-end border-0 rounded-lg'>
								<div className='inputDiv'>
									<label>Address 1</label>
									<input className='border border-slate-400' type="text" name='address_1' defaultValue={address_1} />
								</div>
								<div className='inputDiv'>
									<label>Address 2</label>
									<input className='border border-slate-400' type="text" name='address_2' defaultValue={address_2} />
								</div>
								<div className='inputDiv'>
									<label>Address 3</label>
									<input className='border border-slate-400' type="text" name='address_3' defaultValue={address_3} />
								</div>
								<div className='inputDiv'>
									<label>Address 4</label>
									<input className='border border-slate-400' type="text" name='address_4' defaultValue={address_4} />
								</div>
							</div>
						</div>

						<div className='border-0 p-3 rounded-lg form-panel'>
							<div className='flex flex-col items-end border-0 rounded-lg mb-5'>
								<div className='inputDiv'>
									<label>Eircode</label>
									<input className='border border-slate-400' type="text" name='eircode' defaultValue={eircode} />
								</div>
								<div className='inputDiv'>
									<label>Mobile</label>
									<input className='border border-slate-400' type="text" name='mobile' defaultValue={mobile} />
								</div>
								<div className='inputDiv'>
									<label>Email</label>
									<input className='border border-slate-400' type="text" name='email' defaultValue={email} />
								</div>
								{/* <div className='inputDiv'>
									<label>Notes</label>
									<div className='border border-slate-400' > {notes} </div>
								</div> */}
							</div>

							<div className='flex flex-col items-end border-0 rounded-lg'>
								<div className='inputDiv'>
									<label>Password</label>
									<input className='border border-slate-400' type="text" name='password' defaultValue={password} />
								</div>
								<div className='inputDiv'>
									<label>Created on</label>
									<input className='border border-slate-400' type="text" name='created_on' defaultValue={created_on} />
								</div>
								<div className='inputDiv'>
									<label>Last login</label>
									<input className='border border-slate-400' type="text" name='last_login' defaultValue={last_login} />
								</div>

							</div>
						</div>
					</div>
					
				</Form>


			</div>
		</div>
	)
}

export default FormContactEdit
