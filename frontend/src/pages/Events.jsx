import React from 'react'
import EventList from '../components/EventList'; 
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function Events() {
  return (
    <div>
      <Navbar/>
      <div className=' bg-backscreen px-10 py-5'>
            <EventList />
      </div>
      <Footer/>
    </div>
  )
}
