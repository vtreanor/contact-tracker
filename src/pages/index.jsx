import React from 'react'

const Index = () => {
  return (
    <div className='splashContainer flex '>
      {/* <div className='flex'> */}
        <img src='/customerCare.jpg' className=' w-[60%] rounded-[20px]' />
        {/* </div> */}
      <div className='flex flex-col items-center w-[40%]'>
          
          <div className='w-[60%] flex flex-col items-center'>
          <h1>Contact Tracker</h1>
            <ul className='list-disc text-left font-[600] pt-0 text-[20px] list-inside'>
              <li className='py-3 border-brandGreen border-4 pl-4 rounded-[20px] mt-6 '>Record all important contact details</li>
              <li className='py-3 border-brandGreen border-4 pl-4 rounded-[20px] mt-6 '>Unlimited contacts</li>
              <li className='py-3 border-brandGreen border-4 pl-4 rounded-[20px] mt-6 '>Keep an unlimited number of notes for each contact</li>
            </ul>
          </div>
        
        <div>&nbsp;</div>
      </div>
    </div>
  )
}

export default Index

{/* <div className=' flex flex-col w-[60%] rounded-xl p-8 pb-5 mx-auto  border-brandGreen border-4'> */}