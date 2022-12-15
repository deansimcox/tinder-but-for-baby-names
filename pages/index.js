import Head from 'next/head'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../sections/Content'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Baby names</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='relative overflow-hidden'>
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  )
}
