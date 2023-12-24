import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import ExamplePage1, {loadero as examplePage1Loader} from './pages/examplePage1.jsx'
import ExamplePage2 from './pages/examplePage2.jsx'
import Away from './pages/away.jsx';
import FormContactNew, { action as newContactAction } from './pages/contacts/formContactNew.jsx';
import FormContactEdit, {loader as FormContactEditLoader, action as FormContactEditAction} from './pages/contacts/formContactEdit.jsx';
import FormContactReadOnly, {loader as contactLoader} from './pages/contacts/formContactReadOnly.jsx';
import ContactDelete, {loader as ContactDeleteLoader} from './pages/contacts/formContactDelete.jsx';
// import Persons, {loader as personsLoader} from './pages/persons.jsx';


import Person,  {loader as personLoader} from './pages/person.jsx';
import PersonNew, {action as newAction} from './pages/personNew.jsx';
import PersonDelete, { loader as deletePersonLoader} from './pages/personDelete.jsx';
import PersonEdit, {action as editAction, loader as personEditLoader} from './pages/personEdit.jsx';

import NoteCreate, {loader as noteCreateLoader, action as newNoteAction } from './pages/notes/noteCreate.jsx';
import NoteEdit, {loader as noteEditLoader, action as noteUpdateAction} from './pages/notes/NoteEdit.jsx';
import NoteDelete, {loader as noteDeleteLoader} from './pages/notes/NoteDelete.jsx';
import Notes, {loader as notesLoader} from './pages/notes/notes.jsx';
import Note,  {loader as noteLoader} from './pages/notes/note.jsx';

import Frame1 from './pages/quest.jsx';
import Index from './pages/index.jsx';
import Contacts, { loader as contactsLoader} from './pages/contacts/contacts.jsx';
import Root from './pages/root.jsx';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: contactsLoader,
    children: [
      {index: true, element: <Index />},

      {
        path: "note/create/:id",
        element: <NoteCreate />,
        loader: noteCreateLoader,
        action: newNoteAction,
      },
      {
        path: "note/delete/:id",
        element: <NoteDelete />,
        loader: noteDeleteLoader,
      },
      {
        path: "note/edit/:id/:owner_id",
        element: <NoteEdit />,
        loader: noteEditLoader,
        action: noteUpdateAction,
      },
      {
        path: "notes/:id",
        element: <Notes />,
        loader: notesLoader,
      },
      {
        path: "note/:id",
        element: <Note />,
        loader: noteLoader,
      },
      {
        path: "contact/:id",
        element: <FormContactReadOnly />,
        loader: contactLoader,
      },
      {
        path: "person/:id/personEdit",        
        element: <PersonEdit />,
        loader: personEditLoader,        
        action: editAction,
      },
      // {
      //   path: "personNew",
      //   element: <PersonNew />,
      //   action: newAction,
      //   loader: personsLoader,
      // },
      // {
      //   path: "person/:id/personDelete",
      //   element: <PersonDelete />,
      //   // action: deleteAction,
      //   loader: deletePersonLoader,
      // },
      {
        path: "contacts",
        element: <Contacts />,
        loader: contactsLoader,
      },
      {
        path: "examplePage1",
        element: <ExamplePage1 />,
        loader: examplePage1Loader,
      },
      {
        path: "newcontactform",
        element: <FormContactNew />,
        action: newContactAction,
      },
      {
        path: "editcontactform/:id",
        element: <FormContactEdit />,
        loader: FormContactEditLoader,
        action: FormContactEditAction,
      },
      {
        path: "contactdelete/:id",
        element: <ContactDelete />,
        // action: deleteAction,
        loader: ContactDeleteLoader,
      },
      {
        path: "away",
        element: <Away />,
      },      
      {
        path: "quest",
        element: <Frame1 />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
