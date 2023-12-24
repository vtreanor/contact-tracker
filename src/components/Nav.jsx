import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className='flex border-2 w-full p-2 justify-between rounded-[20px] border-brandGreen bg-brandGray '>      
      <div className="flex grow">
        <img className="mx-3" src="/Subtract.svg " />   
        <div className='mx-3'>item 1</div>
        <div className='mx-3'>item 2</div>
      </div>
      <div>
        <span className='mx-3'><Link to={`/`}>Home</Link></span>
        <span className='mx-3'><Link to={`/contacts`}>Contacts</Link></span>
        <span className='mx-3'><Link to={`/examplePage1`}>default</Link></span>
        <span className='mx-3'><Link to={`/newcontactform`}>New Contact</Link></span>
      </div>
    </div>
  )
}

export default Nav
