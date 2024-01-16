import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around pt-48 bg-gray-100'>
        <div className=''>
        <div className="flex items-center p">
              <img src="/images/Vector.svg" alt=""></img>
              <h2 className="ml-2 font-bold text-lg">LaslasVPN</h2>
            </div>

            <p className='w-80 pt-4 pb-4 leading-loose'>LaslesVPN is a private virtual network that has unique features and has high security.</p>
            <div className='flex justify-between gap-1 pt-4 w-44 pb-4'>
               
                    <img src='./images/Twitter.png' alt='' className='w-6'></img>
                    <img src='./images/Facebook.jpg' alt='' className='w-6'></img>
                   <img src='./images/Instagram.jpg' alt=''className='w-6'></img>
                    </div>  

                    <span className='text-gray-500 pt-9'>©2020LaslesVPN</span>      
        </div>
        <div>
        <h4 className='font-bold text-lg'>Product</h4>
        <ul className='pt-2 leading-loose'>
           <li>Downloads</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Servers</li>
            <li>Countries</li>
            <li>Blog</li>
           </ul>
        </div>
        
        <div>
        <h4 className='font-bold text-lg'>Engage</h4>
        <ul className='pt-2 leading-loose'>
           <li>LasLasVPN</li>
            <li>FAQ</li>
            <li>Tutoriala</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            </ul>
        </div>
        <div>
        <h4 className='font-bold text-lg'>Earn Money</h4>
        <ul className='leading-loose'>
            <li>Affilate Marketing</li>
            <li>Become a Partner</li>
        </ul>
        </div>
    </div>
  )
}

export default Footer