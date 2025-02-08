import { InstagramIcon } from 'lucide-react';
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='bg-white flex justify-center items-center font-Poppins text-black/70 leading-relaxed py-6'>
      <div className='contain'>
        <div className='flex justify-between py-4'>
            <div className='w-[calc(100%/3)]'>
                <h1 className='font-bold text-2xl'>XFARM</h1>
                <p className='text-black/60 leading-relaxed'>Xfarm offers comprehensive insights into modern agriculture, featuring expert articles, realtime weather updates, and advanced tools for crop management. Our platform empowers farmers with cata-driven strategies to enhance productivity and sustainability.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-black/90 font-medium'>Address</h1>
                    <p>Berekum,Sunyani, Bono Region</p>
                </div>
                <div className='flex gap-3'>
                   <h1 className='text-black/90 font-medium'>Phone: </h1>
                   <span>+233 543576794</span>
                </div>
                <div className='flex gap-3'>
                   <h1 className='text-black/90 font-medium'>Email: </h1>
                   <span>adujoy05@gmail.com</span>
                </div>
            </div>
            <div>
                <h1 className='text-black/90 font-medium'>Get in Touch</h1>
                <div>
                        <InstagramIcon/>
                </div>
            </div>
        </div>
        <hr className='border border-gray-200'/>
        <div className='flex justify-between items-center py-4 text-sm'>
            <div>&copy; {year} Micheal Osei Jr.</div>
            <div className='flex gap-6 text-black/70'>
                <span>copyright information</span>
                <span>Privacy Statement</span>
                <span>Terms of use</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
