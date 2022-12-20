'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useGetNewNameQuery } from '../redux/features/api/apiSlice'
import { useSelector } from 'react-redux'
import { selectGender } from '../redux/selectors'

const Namecard = () => {
  const gender = useSelector(selectGender)
  const { data: randomName, refetch } = useGetNewNameQuery(gender)

  const getNewName = () => {
    refetch()
  }

  return (
    <main className='h-[60vh] w-[35vw] bg-slate-300 rounded-lg overflow-hidden'>
      <article className='flex flex-col items-center justify-around h-[100%] w-[100%]'>
        <h2 className='font-serif italic text-6xl'>{randomName}</h2>
        <div className='flex justify-around w-[100%]'>
          <button
            className='bg-red-500 p-6 rounded-full text-white'
            onClick={() => getNewName()}
          >
            <FontAwesomeIcon icon={faXmark} size='3x' className='h-5 w-12' />
          </button>
          <button
            className='bg-green-500 p-6 rounded-full text-white'
            onClick={() => getNewName()}
          >
            <FontAwesomeIcon icon={faCheck} size='3x' />
          </button>
        </div>
      </article>
    </main>
  )
}

export default Namecard
