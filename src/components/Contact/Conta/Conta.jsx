import React from 'react'
import Writing from '../../../assets/image-101.png'
import Mop from '../../../assets/image 102.png'

import { useNavigate } from 'react-router-dom';


const Conta = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    switch (route) {
        case 'Information':
            navigate('/Information');
            break;
        
        default:
            // Handle default case if needed
            break;
    }
};

  return (
    <div className='conta h-[auto]'>
        <div className='conta-img bg-no-repeat py-[140px] bg-cover  w-[-webkit-fill-available]' style={{'background-image': `url(${Writing})`, }}>
            <div className='text-4xl font-semibold text-white pl-36 '>Contact Us</div>
        </div>

        <div className='mt-20 '>
            <div className='md:grid grid-cols-2  mx-9'>
                <div className=' flex justify-center' >
                    <form action="" className='flex flex-col w-[60%] max-md:w-[100%]'>
                        <label htmlFor="" className='text-xl'>Email</label>
                        <input type="email" placeholder='Write your email' className='border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2' />

                        <label htmlFor="" className='text-xl mt-8'>Your Company</label>
                        <input type="email" placeholder='Write name of your company' className='border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2' />

                        <label htmlFor="" className='text-xl mt-8'>Subject</label>
                        <input type="email" placeholder='Write Your Subject' className='border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2' />

                        <label htmlFor="" className='text-xl mt-8'>Subject</label>
                        <textarea name="" placeholder='Write Your Subject' rows={5} className='border-[#DDDFE4] border-2 px-2 py-2 rounded-md  mt-2' id=""></textarea>

                        <button onClick={() => handleClick('Information')} className='bg-[#1CC0A0] text-white px-5 py-2 rounded-md mt-8 w-[25%] ml-[200px] mb-10 max-md:ml-[60px] max-md:w-[50%]'>Submit</button>
                    </form>    
                </div>
                <div className='flex justify-end'>
                    <div>
                        <div>
                            <h1 className='text-2xl font-bold text-[#43385B] max-md:text-xl'>Contact Us</h1>

                            <div className='flex gap-5 mt-4'>
                                <a href=""><i className="fa-solid fa-location-dot text-2xl text-[#1CC0A0] max-md:text-xl"></i></a>
                                <p className='text-xl font-semibold text-[#43385B] max-md:text-md'>Qatar</p>
                            </div>

                            <div className='flex gap-5 mt-2'>
                                <a href=""><i class="fa-solid fa-phone text-2xl text-[#1CC0A0]"></i></a>
                                <p className='text-xl font-semibold text-[#43385B]'>+974 (084) 567 4321</p>
                            </div>

                            <div className='flex gap-5 mt-8'>
                            <a href=""><i className="fa-solid fa-location-dot text-2xl text-[#1CC0A0]"></i></a>
                                <p className='text-xl font-semibold text-[#1CC0A0]'>Google Map</p>
                            </div>

                            <img src={Mop} alt="" className='mt-8 my-2'/>


                        </div>
                    </div>

                </div>
            </div>


        </div>
       

      
    </div>
  )
}

export default Conta
