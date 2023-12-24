import { FaBeer, FaBug, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { Outlet, Form, Link, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { getContact, updatePerson } from '../connections';

export async function loader({ params }) {
	console.log(params.id)
	const person = await getContact(params.id);
	console.log('person', person)
	return { person };
}

export async function action({request, params}){
	console.log('request',request)
	console.log('params',params)
	const formData = await request.formData();
	const updates = Object.fromEntries(formData);
	await updatePerson(params.id, updates);	
	return redirect('/persons');
}

const PersonEdit = () => {
	const { person } = useLoaderData();
	const navigate = useNavigate();
	const { firstName, lastName, age, progress, status, visits } = person

	const container = { width: '100%', height: '100%', paddingLeft: 27, paddingRight: 27, paddingTop: 40, paddingBottom: 40, background: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }
	const section_0 = { justifyContent: 'flex-start', alignItems: 'flex-start', gap: 251, display: 'inline-flex' }
	const div_0 = { width: 370, height: 160, paddingLeft: 11, paddingRight: 11, paddingTop: 13, paddingBottom: 13, background: '#E6E6E6', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }
	const div_0_0 = { color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }
	const contact_img = { width: 156, height: 156 }
	const section_1 = { paddingTop: 28, paddingBottom: 28, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }
	const row = { justifyContent: 'flex-start', alignItems: 'flex-start', gap: 37, display: 'inline-flex' }
	const label = { width: 199, height: 23, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', textAlign: 'left' }
	const item = { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'inline-flex' }
	const iconBar = { width: 777, background: '#D4B6B6', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex', marginTop: '30px' }
	const iconDiv = { width: '48px', height: '48px', display: 'flex', alignItems: 'center' }
	const icon = { width: 32.50, height: 32.50 }
	const input = { width: '370px', height: '40px', border: '1px solid lightgray', borderRadius: '5px', textAlign: 'left', paddingLeft: '10px', display: 'flex', alignItems: 'center' }
	const btn = {width: '100px', height: '40px', border: '1px solid gray', borderRadius: '10px',  margin: '5px' }


	return (
		<div style={container}>
			<div style={section_0}>
				<div style={div_0}>
					<div style={div_0_0}>Contact details</div>
				</div>
				<img style={contact_img} src="https://via.placeholder.com/156x156" />
			</div>
			<Form method = 'POST' id = 'person-form'> 
				<div style={section_1}>
					<div style={row}>
						<div style={item}>
							<div style={label}>First name</div>
							<input style={input} defaultValue={firstName} name='firstName' />
						</div>
						<div style={item}>
							<div style={label}>Last name</div>
							<input style={input} defaultValue={lastName} name='lastName' />
						</div>
					</div>
					<div style={row}>
						<div style={item}>
							<div style={label}>Age</div>
							<input style={input} defaultValue={age} name='age' />
						</div>
						<div style={item}>
							<div style={label}>Progress </div>
							<input style={input} defaultValue={progress} name='progress' />
						</div>
					</div>
					<div style={row}>
						<div style={item}>
							<div style={label}>Status</div>
							<input style={input} defaultValue={status} name='status' />
						</div>
						<div style={item}>
							<div style={label}>Visits</div>
							<input style={input} defaultValue={visits} name='visits' />
						</div>
					</div>
					<div style={iconBar}>
						<button style={btn} type="submit">Save</button>
						<button style={btn} type="button" onClick={()=>{navigate(-1)}}>Cancel</button>
						{/* <div style={iconDiv}><FaTimesCircle style={icon}/></div>
						<div style={iconDiv}>Save</div> */}
					</div>

				</div>
			</Form>
		</div>
	)
}

export default PersonEdit
