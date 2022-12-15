'use client'

import { motion } from 'framer-motion'

import { navVariants } from '../utils/motion'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className='py-10 mx-20'
  >
    <div className='flex justify-between'>
      <img src='/search.svg' alt='search' className='' />
      <h2 className='text-white'>Find the name</h2>
      <img src='/menu.svg' alt='menu' className='' />
    </div>
  </motion.nav>
)

export default Navbar
