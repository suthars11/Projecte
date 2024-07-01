import React, { useState } from 'react';

import Navbar from './component/Navbar/Navbar'
import Hero from './component/hero/Hero';
import Programs from './component/Programs/Programs';
import Title from './component/Title/Title';
import About from './component/About/About';
import Campus from './component/Campus/Campus';
import Testimonials from './component/Testimonials/Testimonials';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import VideoPlayer from './component/videoPlayer/VideoPlayer';


const App = () => {
  const [playState,setPlayState]=useState(false);
  

  return (
    <div>
      <Navbar/>
      <Hero/>

      <div className='container'>

      <Title subTitle='Our Program' title='What We Offer'/>
      <Programs/>
    <About setPlayState={setPlayState}/>

      <Title subTitle='Gallery' title='Campus Photos'/>

      <Campus/>
      <Title subTitle='TESTIMONIALES' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>


      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    
    
    </div>
  )
}

export default App