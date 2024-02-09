import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Footer from './Footer'
import Projects from './Projects'
import Contect from './Contect'
import LeftSider from './LeftSider'

function Home() {
  return (
    <div>
      <Header/>
      <div className='px-40 sm:px-5 bg-primary'>
        <Intro/>
        <About />
        <Experiences />
        <Projects />
        <Contect />
        <Footer/>
        <LeftSider/>
      </div>
      
      
    </div>
  )
}

export default Home
