import React from 'react'
import { redirect, useNavigate, useLoaderData, Link } from 'react-router-dom'
import { FaReply, FaTrash, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { deleteContact, getContact } from '../../connections'
import "../../css/form.css";


export async function loader({ params }) {
	const contact = await getContact(params.id);
	console.log('contact for deletion', contact)
	return { contact };
}

// export async function action({ params }) {
// 	await deleteContact(params.id);
// 	return redirect("/")
// }

function trash(id) {
	const stuff = deleteContact(id);
}

const ContactDelete = () => {

	const { contact } = useLoaderData();
	const { id, first_name, last_name, address_1, address_2, address_3, address_4, eircode, mobile, email, notes, password, created_on, last_login } = contact;
	const navigate = useNavigate();
	return (
		<div className=' flex flex-col w-[60%] rounded-xl p-8 pb-5 mx-auto  border-brandGreen border-4'>
			<div className='formContainer items-center'>
				<div className='flex flex-col  w-[80%] mx-auto justify-center p-5 rounded-[20px] '>
					<h1>Are you sure you want to delete this contact ?</h1>

					<h3 className='py-10 text-center font-bold text-[32px]'> {first_name}  {last_name} </h3>

					<div className='w-full  p-2 rounded-xl mt-8 flex self-center justify-center'>
						<FaTrash className='w-16 h-16 px-4 fill-brandGreen' onClick={() => {
							// deleteContact({ id })
							navigate(`/notes/${owner_id}`);
						}} />
						<FaReply className='w-16 h-16 px-4 fill-brandGreen' onClick={() => { navigate(-1) }} />
					</div>

				</div>
			</div>
		</div>
	)
}

export default ContactDelete
