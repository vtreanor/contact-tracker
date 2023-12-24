import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import { getContact } from "../../connections";
import { FaReply, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { BsReply } from "react-icons/bs";
import { TfiNotepad } from "react-icons/tfi";
import "../../css/form.css"


export async function loader({ params }) {
	const contact = await getContact(params.id);
	return { contact };
}

const FormContactReadOnly = () => {
	const { contact } = useLoaderData();
	const { id, first_name, last_name, address_1, address_2, address_3, address_4, eircode, mobile, email, notes, password, created_on, last_login } = contact;
	const navigate = useNavigate();

	return (
		<div className=' flex flex-col w-[60%] rounded-xl p-8 pb-5 mx-auto  border-brandGreen border-4'>

			<div className='iconBar bg-brandGreen'>
				<h1>Contact read only</h1>
				<div className="flex">
					<FaReply onClick={() => {navigate(-1)}} className='icon cursor-pointer '/>

					<Link to={`/notes/${id}`} className="px-3" > <TfiNotepad className='icon cursor-pointer ' /></Link>
					
					<Link to={`/editcontactform/${id}`} className="px-3" > <CiEdit className='icon cursor-pointer ' /></Link>
				</div>
			</div>


			<div className='formContainer items-center'>

				<div className="flex flex-col w-full">
					<div className='flex w-full justify-evenly gap-2.5 rounded-xl'>


						{/* Left panel */}
						<div className='border-2 p-3 rounded-lg form-panel'>
							<div className='flex flex-col items-end border-0 rounded-lg mb-5'>
								<div className='inputDiv items-center flex '>
									<div>First Name</div>
									<div className="border border-slate-400"> {first_name} </div>
								</div>
								<div className='inputDiv flex justify-around '>
									<div>Last Name</div>
									<div className="border border-slate-400 grow" > {last_name} </div>
								</div>
							</div>

							<div className='flex flex-col items-end border-0 rounded-lg'>
								<div className='inputDiv'>
									<div>Address 1</div>
									<div className="border border-slate-400"> {address_1} </div>
								</div>
								<div className='inputDiv'>
									<div>Address 2</div>
									<div className="border border-slate-400"> {address_2} </div>
								</div>
								<div className='inputDiv'>
									<div>Address 3</div>
									<div className="border border-slate-400"> {address_3} </div>
								</div>
								<div className='inputDiv'>
									<div>Address 4</div>
									<div className="border border-slate-400"> {address_4} </div>
								</div>
							</div>
						</div>


						{/* right panel	 */}
						<div className='border-2 p-3 rounded-lg form-panel'>
							<div className='flex flex-col items-end border-0 rounded-lg mb-5'>
								<div className='inputDiv'>
									<div>Eircode</div>
									<div className="border border-slate-400"> {eircode} </div>
								</div>
								<div className='inputDiv'>
									<div>Mobile</div>
									<div className="border border-slate-400"> {mobile} </div>
								</div>
								<div className='inputDiv'>
									<div>Email</div>
									<div className="border border-slate-400"> {email} </div>
								</div>
								<div className='inputDiv'>
									<div>Notes</div>
									<div className="border border-slate-400"> {notes} </div>
								</div>
							</div>

							<div className='flex flex-col items-end border-0 rounded-lg'>
								<div className='inputDiv'>
									<div>Password</div>
									<div className="border border-slate-400"> {password} </div>
								</div>
								<div className='inputDiv'>
									<div>Created on</div>
									<div className="border border-slate-400"> {created_on} </div>
								</div>
								<div className='inputDiv'>
									<div>Last login</div>
									<div className="border border-slate-400"> {last_login} </div>
								</div>

							</div>
						</div>

					</div>					

				</div>

			</div>
		</div>

	)
}

export default FormContactReadOnly
