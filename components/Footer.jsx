'use client'

import { motion } from 'framer-motion'

import { footerVariants } from '../utils/motion'

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className='py-8'
  >
    <div className='mx-20 flex flex-col gap-8'>
      <div className='flex flex-col max-h-100px'>
        <div className='mb-[20px] sm:mb-[50px] h-[2px] bg-white opacity-10' />
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <h4 className='font-extrabold text-[14px] sm:text-[24px] text-white'>
            Victor Martinez
          </h4>
          <p className='font-normal text-[10px] sm:text-[14px] text-white opacity-80'>
            Copyright © 2021 - 2022 Victor L. Martinez. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
)

export default Footer
