import React from 'react'
import { Link, useLoaderData } from "react-router-dom";

export async function loadero(){
  const persons = [
    {id: 1, firstName: 'Bill', lastName: 'Quigley'}, 
    {id: 2, firstName: 'Barney', lastName: 'Wilson'},
    {id: 3, firstName: 'Harry', lastName: 'Fletcher'},
  ];  
  return {persons};
}

const ExamplePage1 = () => {
  const { persons } = useLoaderData();
  return (
    <div>
      <h1>Example Page 1</h1>     
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.firstName} {person.lastName} </li>
        ))}
      </ul> 
    </div>
  )
}

export default ExamplePage1