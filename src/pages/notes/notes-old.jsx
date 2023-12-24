import React from 'react'
import { FaReply, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { getContact, getNotes } from '../../connections';
import { Link, useLoaderData, useNavigate } from "react-router-dom";

export async function loader({ params }) {
  const person = await getContact(params.id);
  const notes = await getNotes(params.id)
  return { person, notes };
}

const Notes = () => {

  const { person } = useLoaderData();
  const { notes } = useLoaderData()
  const navigate = useNavigate();
  const { id, firstName, lastName, age, progress, status, visits } = person
  const { note_id, owner_id, date_created, data_modified, entry } = notes;

  const result = notes.length ? 'we got data' : 'no notes available'

  // console.log('notes loader row count', notes.length)

  const iconBar = { width: '100%', background: '#D4B6B6', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex', marginTop: '30px' }
  const btn = { width: '100px', height: '40px', border: '1px solid gray', borderRadius: '10px', margin: '5px' }
  const iconDiv = { width: '48px', height: '48px', display: 'flex', alignItems: 'center' }
  const icon = { width: 32.50, height: 32.50 }
  const heading = { fontSize: '2.1rem', fontWeight: 600, marginLeft: '10px' }
  const pagination = { alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 78, display: 'inline-flex' }
  const content = { width: 777, height: 374, position: 'relative', background: 'white', textAlign: 'left', padding: '10px' }
  const pageTitle = { flex: '1 1 0', height: 45, padding: 10, background: 'red', fontSize: '1.5rem', fontWeight: 600, marginLeft: '10px', textAlign: 'left', alignItems: 'center', display: 'flex' }
  const container = { width: '100%', height: '100%', paddingLeft: 27, paddingRight: 27, paddingTop: 40, paddingBottom: 40, background: '#D1D1D1', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 18, display: 'inline-flex' }
  const div0 = { alignSelf: 'stretch', flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 41, display: 'flex' }
  const div1 = { alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 78, display: 'inline-flex' }
  const iconsContainer = { height: 32.50, justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'flex' }

  return (

    <div style={container}>
      <div style={div0}>

        <div style={div1}>

          <div style={pageTitle}>
            Notes list for {firstName} {lastName}
          </div>

          <div style={iconsContainer}>
            <button data-tooltip-id="tt1" style={iconDiv} onClick={() => { navigate(-1) }}><FaReply style={icon} /></button>
            <button data-tooltip-id="tt4" style={iconDiv}><Link to={`/note/create/${id}`}><FaPlusCircle style={icon} /></Link></button>
          </div>

        </div>

        <div style={content}>
          <ul>
            {notes.map((note) => (
              <li>
                {note.entry}
              </li>
            ))}
          </ul>
        </div>

        <div style={pagination}>
          <div style={iconBar}>
            <button data-tooltip-id="tt1" style={iconDiv} onClick={() => { navigate(-1) }}><FaReply style={icon} /></button>
            <button data-tooltip-id="tt4" style={iconDiv}><Link to={`/notes/${id}/`}><TbNotes style={icon} /></Link></button>
            <button data-tooltip-id="tt2" style={iconDiv}><Link to={`/person/${id}/personEdit`}><FaEdit style={icon} /></Link></button>
            <button data-tooltip-id="tt3" style={iconDiv}><Link to={`/person/${id}/personDelete`}><FaTimesCircle style={icon} /></Link></button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Notes
