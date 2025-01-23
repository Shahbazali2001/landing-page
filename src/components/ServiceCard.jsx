import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
            <img src={imgURL} alt='Service Icon' />
        </div>
        <h3 className='mt-6 text-2xl font-semibold font-palanquin'>{label}</h3>
        <p className='mt-4 text-sm text-gray-700'>{subtext}</p>
    </div>
  )
}

export default ServiceCard