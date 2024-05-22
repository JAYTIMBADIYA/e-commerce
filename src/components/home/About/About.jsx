import React from 'react'
import Abo1 from '../../../assets/image 124.png'
import Abo2 from '../../../assets/Illustration.png'
import Abo3 from '../../../assets/GooglePlay.png'
import Abo4 from '../../../assets/App Store.png'

 
const About = () => {
  return (
    <>
    <div className='about-first mx-9 py-20'>
        <div className='md:grid grid-cols-2'>
            <div className='max-sm:text-sm'>
                <h4 className='text-xl font-semibold text-amber-500'>About us</h4>
                <h3 className='text-4xl font-semibold my-2 leading-relaxed'>Welcome to Golalita </h3>
                <h5 className='text-lg text-ellipsis tracking-wider leading-relaxed text-gray-500'>Golalita offers you great products at unbeatable prices, <br /> getaways that are unforgettable and services that you will <br /> experience at all times.</h5>
                <h5 className='text-lg text-ellipsis tracking-wider leading-relaxed mt-7 text-gray-500'>Whatever you need, we make things happen from the <br /> comfort of your home, straight to real-life environment, we <br /> pride our selves to bring you the best we offer.</h5>
                <button className='py-3 px-10 bg-[#1CC0A0] trenp text-white text-xl mt-10 rounded-lg max-sm:py-1 max-sm:px-5 max-sm:mt-1'>Shop now</button>
            </div>
            <div>
                <img src={Abo1} alt=""  className='max-sm:mt-10'/>
            </div> 
        </div>  
    </div>

    <div className='about-first mx-9 py-20'>
        <div className='md:grid grid-cols-2'>
            <div className='basis-1/2'>
                <img src={Abo2} alt="" />
            </div>

            <div className='mt-16'>
                <h4 className='text-xl font-semibold text-amber-500'>About us</h4>
                <h3 className='text-4xl font-semibold my-2 leading-relaxed'>Mobile Application for ios and Android</h3>
                <h5 className='text-lg text-ellipsis tracking-wider leading-relaxed mt-5 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas aliquet purus id in facilisi fringilla tellus nunc <br /> rhoncus. Fames faucibus aliquam sagittis, adipiscing massa. <br /> Euismod ut tortor suspendisse phasellus integer</h5>
                <div className='flex gap-10 mt-10 max-sm:w-[100px]'>
                    <img src={Abo3} alt="" />
                    <img src={Abo4} alt="" />
                </div>
            </div>      
        </div>  
    </div>




    </>

    
  )
}

export default About
