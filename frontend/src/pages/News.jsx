import React from 'react'
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import NewsPage from './NewsPage';

export default function Events() {
  return (
    <div>
      <Navbar/>
      <div className=' bg-backscreen px-10 py-5'>
            <NewsPage />
      </div>
      <Footer/>
    </div>
  )
}
