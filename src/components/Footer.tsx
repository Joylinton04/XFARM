import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className='bg-white flex justify-center items-center font-Poppins text-black/70 leading-relaxed py-6'>
      <div className='max-w-7xl w-[80%] max-[64.1rem]:w-[95%]'>
        <div className='flex justify-between py-4 flex-wrap gap-6'>
            <div className='w-[calc(100%/3)] max-[64.1rem]:w-full'>
                <h1 className='font-bold text-2xl'>XFARM</h1>
                <p className='text-black/60 leading-relaxed'>Xfarm offers comprehensive insights into modern agriculture, featuring expert articles, realtime weather updates, and advanced tools for crop management. Our platform empowers farmers with cata-driven strategies to enhance productivity and sustainability.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2 '>
                    <h1 className='text-black/90 font-medium'>Address</h1>
                    <p className='text-sm'>Berekum,Sunyani, Bono Region</p>
                </div>
                <div className='flex gap-3 items-center'>
                   <h1 className='text-black/90 font-medium'>Phone: </h1>
                   <span className='text-sm'>+233 543576794</span>
                </div>
                <div className='flex gap-3 items-center'>
                   <h1 className='text-black/90 font-medium'>Email: </h1>
                   <span className='text-sm'>adujoy05@gmail.com</span>
                </div>
            </div>
            <div>
                <h1 className='text-black/90 font-medium'>Get in Touch</h1>
                <div className='flex gap-3 mt-2'>
                    <div className='bg-black p-1 w-8 h-8 grid place-content-center rounded-full'><InstagramIcon fill='#ffff'/></div>
                    <div className='bg-black p-1 w-8 h-8 grid place-content-center rounded-full'><FacebookIcon fill='#ffff'/></div>
                    <div className='bg-black p-1 w-8 h-8 grid place-content-center rounded-full'><TwitterIcon fill='#ffff'/></div>
                </div>
            </div>
        </div>
        <hr className='border border-gray-200'/>
        <div className='flex justify-between items-center py-4 text-sm flex-wrap gap-6'>
            <div>&copy; {year} Micheal Osei Jr.</div>
            <div className='flex gap-6 text-black/70 max-ssm:flex-wrap'>
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
