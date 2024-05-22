import React from 'react'
import Slider from '../Slider/Slider'

const Stores = () => {
  return (
    <div className='store'>
      <div>
        <h3 className='text-4xl font-semibold mt-16 mx-9'>Browse Stores</h3>
        <div>
            <Slider img={"../../../assets/g2.jpg"}/>
        </div>
      </div>
    </div>
  )
}

export default Stores
