import React from 'react'
import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt='Special Offer' className='object-contain' width={773} height={687} />
      </div>
    </section>
  )
}

export default SpecialOffer