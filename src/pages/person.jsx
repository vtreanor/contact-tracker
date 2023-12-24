import { FaBeer, FaBug, FaRegEnvelope, FaMinusCircle, FaReply, FaEdit, FaTimesCircle } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { Outlet, Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip"
import { getContact } from '../connections';

export async function loader({ params }) {
	console.log(params.id)
	const person = await getContact(params.id);
	console.log('person', person)
	return { person };
}

const Person = () => {
	const { person } = useLoaderData();
	const navigate = useNavigate();
	const { id, firstName, lastName, age, progress, status, visits } = person

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
	const btn = { width: '100px', height: '40px', border: '1px solid gray', borderRadius: '10px', margin: '5px' }


	return (
		<div style={container}>
			<div style={section_0}>
				<div style={div_0}>
					<div style={div_0_0}>Contact details</div>
					<div style={div_0_0}>Read only</div>
				</div>
				<img style={contact_img} src="https://via.placeholder.com/156x156" />
			</div>

			<div style={section_1}>
				<div style={row}>
					<div style={item}>
						<div style={label}>First name</div>
						<div style={input}> {firstName} </div>
					</div>
					<div style={item}>
						<div style={label}>Last name</div>
						<div style={input}> {lastName} </div>
					</div>
				</div>
				<div style={row}>
					<div style={item}>
						<div style={label}>Age</div>
						<div style={input}> {age} </div>
					</div>
					<div style={item}>
						<div style={label}>Progress </div>
						<div style={input}> {progress} </div>
					</div>
				</div>
				<div style={row}>
					<div style={item}>
						<div style={label}>Status</div>
						<div style={input}> {status} </div>
					</div>
					<div style={item}>
						<div style={label}>Visits</div>
						<div style={input}> {visits} </div>
					</div>
				</div>

				{/* <div style={iconDiv}><Link to={`/person/${id}/personEdit`}><FaEdit style={icon} /></Link></div> */}

				<div style={iconBar}>
					<button data-tooltip-id="tt1" style={iconDiv} onClick={() => { navigate(-1) }}><FaReply style={icon} /></button>
					<button data-tooltip-id="tt4" style={iconDiv}><Link to={`/notes/${id}/`}><TbNotes style={icon} /></Link></button>
					<button data-tooltip-id="tt2" style={iconDiv}><Link to={`/person/${id}/personEdit`}><FaEdit style={icon} /></Link></button>
					<button data-tooltip-id="tt3" style={iconDiv}><Link to={`/person/${id}/personDelete`}><FaTimesCircle style={icon} /></Link></button>
				</div>

				<ReactTooltip
					id="tt1"
					place="bottom"
					content="Go back" />

				<ReactTooltip
					id="tt2"
					place="bottom"
					content="Edit" />

				<ReactTooltip
					id="tt3"
					place="bottom"
					content="Delete" />

				<ReactTooltip
					id="tt4"
					place="bottom"
					content="Notes" />

			</div>

		</div>
	)
}

export default Person
