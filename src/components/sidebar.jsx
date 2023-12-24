import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (    
    <div className="w-[157px] h-[1080px] px-[19px] py-2.5 pb-0 rounded-[20px] flex-col justify-start items-center gap-[9px] inline-flex bg-sidebar">
      <img className="w-[75px] h-[110px] relative rounded-[5px]" src="hawk.jpg" />
      <div className="w-[97px] h-0.5 bg-zinc-300" />
      <div className="w-[119px] h-[41px] text-center text-white text-2xl font-normal font-['Inter']"><Link to={`/`}>Home</Link></div>
      <div className="w-[119px] h-[41px] text-center text-white text-2xl font-normal font-['Inter']"><Link to={`/contacts`}>Contacts</Link></div>
      <div className="w-[119px] h-[41px] text-center text-white text-2xl font-normal font-['Inter']"><Link to={`/examplePage1`}>Pets</Link></div>
      <div className="w-[119px] h-[41px] text-center text-white text-2xl font-normal font-['Inter']"><Link to={`/form`}>Form</Link></div>

    </div>
  )
}

export default Sidebar
