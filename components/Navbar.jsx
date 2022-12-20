'use client'

import { motion } from 'framer-motion'

import { navVariants } from '../utils/motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMarsAndVenus,
  faMars,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from 'react-redux'
import { setShowGender } from '../redux/genderSlice'

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className='py-10 mx-20'
    >
      <div className='flex justify-between'>
        <div>
          <FontAwesomeIcon
            icon={faMars}
            size='2x'
            className='text-white opacity-50 hover:cursor-pointer hover:opacity-75'
            onClick={() => dispatch(setShowGender('M'))}
          />
          <FontAwesomeIcon
            icon={faVenus}
            size='2x'
            className='text-white opacity-50 mx-5 hover:cursor-pointer hover:opacity-75'
            onClick={() => dispatch(setShowGender('F'))}
          />
          <FontAwesomeIcon
            icon={faMarsAndVenus}
            size='2x'
            className='text-white opacity-50 hover:cursor-pointer hover:opacity-75'
            onClick={() => dispatch(setShowGender('*'))}
          />
        </div>
        <h2 className='text-white pr-[8rem]'>Find the name</h2>
        <img src='/menu.svg' alt='menu' className='' />
      </div>
    </motion.nav>
  )
}

export default Navbar