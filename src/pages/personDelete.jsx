import React from 'react'
import { redirect, useNavigate, useLoaderData, Link } from 'react-router-dom'
import { deletePerson, getContact } from '../connections'

export async function loader({ params }) {
	console.log(params.id)
	const person = await getContact(params.id);
	console.log('person', person)
	return { person };
}

// export async function action({ params }) {
// 	await deletePerson(params.id);
// 	return redirect("/")
// }

function trash(id) {
	const stuff = deletePerson(id);
}

const PersonDelete = () => {

	const { person } = useLoaderData();
	const { id ,firstName, lastName, age, progress, status, visits } = person
	const navigate = useNavigate();

	const container = { width: '100%', height: '100%', paddingLeft: 27, paddingRight: 27, paddingTop: 40, paddingBottom: 40, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }
	const innerContainer = { flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }
	const message = { width: 770, height: 65, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }
	const messageBox = { flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'flex' }
	const buttonBox = { justifyContent: 'center', alignItems: 'center', gap: 60, display: 'inline-flex' }
	const button = { width: 296, height: 74, background: '#D4B6B6', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }
	const buttonText = { width: 227, height: 47, textAlign: 'center', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }

	return (
		<div style={container}>
			<div style={innerContainer}>

				<div style={messageBox}>
					<div style={message}>Are you sure you want to delete</div>
					<div style={message}>{firstName} {lastName}</div>
				</div>

				<div style={buttonBox}>
					<Link to = {`/persons`}>
						<button style={button} onClick={trash({id})}>
							<div style={buttonText}>Yes, delete</div>
						</button>
					</Link>
					<button style={button}>
						<div style={buttonText} onClick={() => { navigate(-1) }}>Cancel</div>
					</button>
				</div>

			</div>
		</div>

	)
}

export default PersonDelete