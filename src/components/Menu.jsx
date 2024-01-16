import React from 'react'
import { Btn } from './Btn'


export const Menu = () => {
  return (
    <div>
        <div className='flex justify-around space-4 items-center pt-28'>
            <div>
           <h1 className='font-semibold text-4xl w-96 leading-relaxed'>Want anything to be easy with <span className='font-bold'>LaslesVPN.</span></h1>
           <p className='w-96 leading-relaxed pt-4 pb-14'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            <Btn/>
            </div>

            <div>
                <img src='/images/illustration 1.svg' alt="" className='pop-up'></img>
            </div>
        </div>
    </div>
  )
}
