import React, { useMemo } from 'react'
import { FaBeer, FaBug, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { getContacts, getNoteCount, getNames } from "../connections";
import Contacts from './contacts/contacts';

export async function loader() {
  const persons = await getContacts();
  return persons;
}

const Persons = () => {
  const persons = useLoaderData();

  const icon = { width: 32.50, height: 32.50 }

  return (
    <div></div>     
      // <Contacts />
    
  );
};




export default Persons
