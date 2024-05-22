import React from 'react'
import Reg from '../../../assets/reg.png'

const Register = () => {
  return (
    <div>
       <div className='about-first '>
            <div className='md:grid grid-cols-2'>
                <div className=''>
                    <img  src={Reg} alt="" />
                </div>
    
                <div className='mt-16 ml-28 max-sm:ml-10'>
                    <h4 className='text-xl font-semibold text-amber-500'>Register</h4>
                    <h3 className='text-4xl font-semibold my-2 leading-relaxed max-sm:text-xl'>Join, Be a Member and <br /> Go Shopping with Golalita. <br /> Be a member now.</h3>
                    <button className='py-3 px-10 bg-[#1CC0A0] trenp text-white text-xl mt-10 rounded-lg '>Join now</button>        
                </div>      
            </div>  
        </div>
    </div>
  )
}

export default Register
