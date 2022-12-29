'use client'

import { motion } from 'framer-motion'

import { rotateIn } from '../utils/motion'

import Namecard from '../components/Namecard'

const Content = () => {
  return (
    <motion.div
      variants={rotateIn('right')}
      initial='hidden'
      whileInView='show'
      className='w-full h-[70vh] flex justify-center items-center'
    >
      <Namecard />
    </motion.div>
  )
}

export default Content
