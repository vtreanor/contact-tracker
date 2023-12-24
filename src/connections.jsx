import { useState, useEffect } from 'react';

export async function getContacts() {
  const data = await fetch("http://localhost:5000/contacts", {

  });
  const jsonData = await data.json();
  return jsonData;
}


// export async function getContacts(){
//     const data = await fetch("http://localhost:5000/persons", {

//     });
//     const jsonData = await data.json();    
//     return jsonData;
// }

export async function getContact(id) {
  try {
    const contact = await fetch(`http://localhost:5000/contact/${id}`);
    const jsonData = await contact.json();
    return jsonData;
  } catch (e) {
    console.log('e', e)
    return null;
  }
}

// update existing contact
export async function updateContact(id, params) {
  const data = await fetch(`http://localhost:5000/contact/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  return 'done';
}


// update existing person
export async function updatePerson(id, params) {
  const data = await fetch(`http://localhost:5000/person/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  return 'done';
}

export async function newPerson(params) {
  const data = await fetch(`http://localhost:5000/person`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  return 'done';
}

export async function newContact(params) {
  const data = await fetch(`http://localhost:5000/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  return 'done';
}

export async function deletePerson(params) {
  const id = params.id;
  await fetch(`http://localhost:5000/person/${id}`, {
    method: 'DELETE'
  })
}

export async function deleteContact(params) {
  const id = params.id;
  console.log('delete the id', params)
  await fetch(`http://localhost:5000/contact/${id}`, {
    method: 'DELETE'
  })
}

//get all notes for all owners
export async function getAllNotes() {

  const data = await fetch(`http://localhost:5000/notes`, {
    // method: "GET"
  });
  const jsonData = await data.json();
  console.log('getNotes data', jsonData)
  return jsonData;
}


//get all notes for one particular owner
export async function getNotes(id) {
  const data = await fetch(`http://localhost:5000/notes/${id}`);
  try {
    const jsonData = await data.json();
    return jsonData;
  } catch (err) {
    console.log('getNotes error', err)
    return null
  }
}

//get one particular note
export async function getNote(id) {
  // console.log('getNotes id', id)
  const data = await fetch(`http://localhost:5000/note/${id}`, {
    // method: "GET"
  });
  console.log('data in connections', data)
  const jsonData = await data.json();
  // console.log('jsonData[0]', jsonData[0])
  return jsonData;
}


export async function newNote(params, id) {
  console.log('new note save', params, id)
  const data = await fetch(`http://localhost:5000/note/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  console.log('data', data)
  return 'done';
}


// update existing note
export async function updateNote(id, params) {
  const data = await fetch(`http://localhost:5000/note/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  return 'done';
}


export async function deleteNote(params) {
  const id = params.id;
  console.log('delete id', params)
  await fetch(`http://localhost:5000/note/${id}`, {
    method: 'DELETE'
  })
}

export async function getNoteCount() {
  const data = await fetch(`http://localhost:5000/note/count`)
  const jsonData = await data.json();
  // console.log('getCount data', jsonData)
  return jsonData;
}

export async function getNames() {
  const data = await fetch(`http://localhost:5000/names`)
  const jsonData = await data.json();
  // console.log('getCount data', jsonData)
  return jsonData;
}