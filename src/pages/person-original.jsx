import { FaBeer, FaBug, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { Outlet, Form, Link, useLoaderData } from "react-router-dom";
import { getContact } from '../connections';

export async function loader({ params }) {
	console.log(params.id)
	const person = await getContact(params.id);
	console.log('person', person)
	return { person };
}

const Person = () => {
	const { person } = useLoaderData();
	const { firstName, lastName, age, progress, status, visits } = person

	const section1 = { flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px', display: 'flex' }
	const row = { justifyContent: 'flex-start', alignItems: 'flex-start', gap: '37px', display: 'inline-flex' }
	const item = { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '6px', display: 'inline-flex' }
	const label = { width: '199px', height: '23px', color: 'black', fontSize: '20px', fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', textAlign: 'left', paddingLeft: '10px' }
	const box = { width: '370px', height: '40px', border: '1px solid lightgray', borderRadius: '5px', textAlign: 'left', paddingLeft: '10px', display: 'flex', alignItems: 'center' }
	const iconDiv = { width: '48px', height: '48px', display: 'flex', alignItems: 'center' }
	const icon = { width: '40px', height: '40px' }
	const iconContainer = { width: '100%', height: '100%', background: '#D4B6B6', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', display: 'inline-flex' }

	return (
		<div className='person'>
			<div className='shell'>

				<div className='section0' >
					<div className='div1'>
						<div className='div11'>Contact details</div>
					</div>
					<img src="https://via.placeholder.com/156x156" />
				</div>

				{/* <div style={iconContainer}>
					<div style={iconDiv}> <Link to={`/examplePage1`}><FaTimesCircle style={icon} /></Link> </div>
					<div style={iconDiv}> <Link to={`/examplePage2`}><FaEdit style={icon} /></Link> </div>
				</div> */}

				<Form method='POST' id='person-form'>
					<div style={section1}>
						<div style={row}>
							<div style={item}>
								<div style={label}>First name</div>
								<input style={box} defaultValue={firstName} />
							</div>
							<div style={item}>
								<div style={label}>Last name</div>
								<input style={box} defaultValue={lastName} />
							</div>
						</div>
						<div style={row}>
							<div style={item}>
								<div style={label}>Age</div>
								<input style={box} defaultValue={age} />
							</div>
							<div style={item}>
								<div style={label}>Progress </div>
								<input style={box} defaultValue={progress} />
							</div>
						</div>
						<div style={row}>
							<div style={item}>
								<div style={label}>Status</div>
								<input style={box} defaultValue={status} />
							</div>
							<div style={item}>
								<div style={label}>Visits</div>
								<input style={box} defaultValue={visits} />
							</div>
						</div>
					</div>
					<div style={iconContainer}>
						<div style={iconDiv}> <Link to={`/examplePage1`}><FaTimesCircle style={icon} /></Link> </div>
						<div style={iconDiv}> <Link to={`/examplePage2`}><FaEdit style={icon} /></Link> </div>
					</div>
				</Form>


			</div>
		</div>
	)
}

export default Person
