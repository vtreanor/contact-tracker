import React from 'react'
import {useNavigate, redirect, Form, Link } from "react-router-dom";
// import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaSave, FaReply, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { TfiNotepad } from "react-icons/tfi";
import { CiEdit } from "react-icons/ci";
// import { getContact, updatePerson, newPerson } from '../connections';
import { newContact } from '../../connections';

import "../../css/form.css"


export async function action({request, params}){
	const formData = await request.formData();
	const newData = Object.fromEntries(formData);
  console.log('newData',newData)
	await newContact( newData );	
	return redirect('/contacts');
}



const FormContactNew = () => {
  const navigate = useNavigate();

  function handleClick(){
    preventDefault();
    navigate(-1)
  }


  return (
    <div className=' flex flex-col w-[60%] rounded-xl p-8 pb-5 mx-auto  border-brandGreen border-4'>
      
      
      <div className='iconBar bg-brandGreen'>
				<h1>New Contact</h1>
				<div className="flex">
					<FaReply onClick={() => {navigate(-1)}} className='icon cursor-pointer '/>
					
					<Link to={``} className="px-3" > <FaSave className='icon cursor-pointer ' /></Link>
				</div>
			</div>


      <div className='formContainer items-center'>       

        <Form className='flex flex-col w-full' method='POST' id='newContactForm'>
          <div className='flex w-full justify-evenly bg-brandGray rounded-xl'>

            <div className='border-2 p-3 rounded-lg form-panel'>
              <div className='flex flex-col items-end border-2 rounded-lg mb-5'>
                <div className='inputDiv'>
                  <label>First Name</label>
                  <input className='border border-slate-400' type="text" name='first_name' defaultValue = 'James' />
                </div>
                <div className='inputDiv'>
                  <label>Last Name</label>
                  <input className='border border-slate-400' type="text" name='last_name' defaultValue='Jones' />
                </div>
              </div>

              <div className='flex flex-col items-end border-2 rounded-lg'>
                <div className='inputDiv'>
                  <label>Address 1</label>
                  <input className='border border-slate-400' type="text" name='address_1' defaultValue='35 Wayfield Drive' />
                </div>
                <div className='inputDiv'>
                  <label>Address 2</label>
                  <input className='border border-slate-400' type="text" name='address_2' defaultValue='Hartlepool' />
                </div>
                <div className='inputDiv'>
                  <label>Address 3</label>
                  <input className='border border-slate-400' type="text" name='address_3' defaultValue='London SW1' />
                </div>
                <div className='inputDiv'>
                  <label>Address 4</label>
                  <input className='border border-slate-400' type="text" name='address_4' defaultValue='UK' />
                </div>
              </div>
            </div>

            <div className='border-2 p-3 rounded-lg form-panel'>
              <div className='flex flex-col items-end border-2 rounded-lg mb-5'>
                <div className='inputDiv'>
                  <label>Eircode</label>
                  <input className='border border-slate-400' type="text" name='eircode' defaultValue='K87 L43' />
                </div>
                <div className='inputDiv'>
                  <label>Mobile</label>
                  <input className='border border-slate-400' type="text" name='mobile' defaultValue='079 233 4555' />
                </div>
                <div className='inputDiv'>
                  <label>Email</label>
                  <input className='border border-slate-400' type="text" name='email' defaultValue='james@example.com' />
                </div>
                <div className='inputDiv'>
                  <label>Notes</label>
                  <input className='border border-slate-400' type="text" name='notes' defaultValue='3' />
                </div>
              </div>

              <div className='flex flex-col items-end border-2 rounded-lg'>
                <div className='inputDiv'>
                  <label>Password</label>
                  <input className='border border-slate-400' type="text" name='password' defaultValue='ytr129' />
                </div>
                <div className='inputDiv'>
                  <label>Created on</label>
                  <input className='border border-slate-400' type="text" name='created_on' defaultValue='31-3-2021' />
                </div>
                <div className='inputDiv'>
                  <label>Last login</label>
                  <input className='border border-slate-400' type="text" name='last_login' defaultValue='10-9-2023' />
                </div>

              </div>
            </div>
          </div>
          <div className='w-full bg-brandGray p-4 rounded-xl mt-8 flex self-center justify-end'>
            <button className='bg-brandGreen' type='submit'>Save</button>
            <button className='bg-brandGreen' type='button' onClick={()=>{navigate(-1)}} >Cancel</button>
          </div>
        </Form>


      </div>
    </div>
  )
}

export default FormContactNew