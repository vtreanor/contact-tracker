import { Outlet, Link, useLoaderData, NavLink } from "react-router-dom";
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
// import Sidebar from "./components/sidebar";
import Nav from "./components/nav";

import './App.css'

// export async function loader(){
//   // const persons = [{id: 1, first: 'Bill', last: 'Quigley'}, {id: 2, first: 'Barney', last: 'Wilson'}];
//   const persons = await getContacts();
//   return {persons};
// }

function App() {
  // const { persons } = useLoaderData();
  return (
    <>
      <div className='mainContainer flex ' id="sidebar" >

        {/* everything below the top menu starts here */}
        <div className='mainContent'>
          <Nav />

          {/* content section */}
          <div className='contentSection'>
            <Outlet />
          </div>

        </div>


      </div>
    </>
  )
}

export default App

{/* Main Menu at top of page */}
{/* <div className='topMenu' >
          <div className='brand' >Brand</div>
          <div className='topMenuItems' >
            <div><Link to={`/`}>Home</Link></div>
            <div><Link to={`/`}>Home</Link></div>
            <div><Link to={'/away'}>Away</Link></div>
            <div><Link to={`/`}>Home</Link></div>
            <div><Link to={`/`}>Home</Link></div>
            <div><Link to={`/quest`}>Quest</Link></div>
            <div><FaSearch /></div>
          </div>
        </div> */}

        {/* footer */}
        // <div className='footerMain' >
        //   <div className='footerLHS' />
        //   <div className='footerRHS' />
        // </div>

