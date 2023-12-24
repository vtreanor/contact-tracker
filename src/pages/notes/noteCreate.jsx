import React from 'react'
import { FaReply, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle, FaSave } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { getContact, newNote } from '../../connections';
import { Link, useLoaderData, useNavigate, Form, redirect } from "react-router-dom";

export async function loader({ params }) {
	const person = await getContact(params.id);
	console.log('create loader', params.id)
	return { person };
}
export async function action({ request, params }) {
	const id = params.id;
	console.log('new note action: id', id)
	const formData = await request.formData();
	const newData = Object.fromEntries(formData);
	const retval = await newNote(newData, id);
	console.log('retval', retval)
	return redirect(`/notes/${params.id}`);
}

const NoteCreate = () => {

	const { person } = useLoaderData();
	const navigate = useNavigate();
	const { id, firstName, lastName, age, progress, status, visits } = person

	const container = { width: '100%', height: '100%', paddingLeft: 27, paddingRight: 27, paddingTop: 40, paddingBottom: 40, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }
	const containerInner = { paddingBottom: 28, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }
	const label = { height: 23, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }

	const box = { alignSelf: 'stretch', flex: '1 1 0', background: '#D9D9D9', display: 'flex', alignItems: 'center', textAlign: 'center' }
	const div0 = { alignSelf: 'stretch', height: 67, justifyContent: 'flex-end', alignItems: 'flex-start', gap: 37, display: 'inline-flex', width: '100%' }
	const div1 = { flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 10, display: 'inline-flex' }
	const div2 = { width: 130, height: 67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }
	const div3 = { alignSelf: 'stretch', height: 423.50, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 37, display: 'flex' }
	const div4 = { alignSelf: 'stretch', flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex' }
	// const iconBar = { width: 777, background: '#D4B6B6', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex' }
	const iconBar = { width: '100%', background: '#D4B6B6', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex', marginTop: '30px' }
	const icon = { width: 32.50, height: 32.50 }
	const owner = { width: 605, color: 'black', fontSize: 32, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word', textAlign: 'left' }
	const ownerBox = { flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 15, paddingRight: 15, paddingTop: 16, paddingBottom: 16, background: '#DF9393', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }
	const topRow = { width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 37, display: 'inline-flex' }
	const topRowInner = { flex: '1 1 0', height: 64, justifyContent: 'flex-end', alignItems: 'flex-start', gap: 10, display: 'flex' }
	const dateContainer = { width: 130, alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'inline-flex' }
	const topRowInnerInner = { flex: '1 1 0', height: 64, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }
	const controls = { alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 78, display: 'inline-flex', width: '100%' }
	const iconDiv = { width: '48px', height: '48px', display: 'flex', alignItems: 'center' }
	const date = new Date();
	const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

	return (
		<div style={container}>
			<div style={containerInner}>

				<Form method='POST' id='note-form'>
					<div style={div0}>
						<div style={div1}>

							<div style={topRow}>
								<div style={topRowInner}>
									<div style={topRowInnerInner}>
										<div style={ownerBox}>
											<div style={owner}>Create new noteen for {firstName} {lastName} </div>
										</div>
										<div style={dateContainer}>
											<div style={label}>Date</div>
											<input style={box} defaultValue={today} name='noteDate' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>



					<div style={div3}>
						<div style={div4}>
							<div style={label}>Note</div>
							<textarea rows='15' cols='100' className='p-2 border rounded-md bg-slate-100 ' name='noteBody'>
								It was a dark and stormy night...
							</textarea>
						</div>
					</div>

					<div style={controls}>
						<div style={iconBar}>
							<button data-tooltip-id="tt1" style={iconDiv} type='button' onClick={() => { navigate(-1) }}><FaReply style={icon} /></button>
							<button data-tooltip-id="tt4" style={iconDiv} type='submit'><FaSave style={icon} /></button>
							<button data-tooltip-id="tt2" style={iconDiv}><Link to={`/person/${id}/personEdit`}><FaEdit style={icon} /></Link></button>
							<button data-tooltip-id="tt3" style={iconDiv}><Link to={`/person/${id}/personDelete`}><FaTimesCircle style={icon} /></Link></button>
						</div>
					</div>

				</Form>

			</div>
		</div>
	)
}

export default NoteCreate
