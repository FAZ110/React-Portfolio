import { useState } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skill from './components/skill'
import SkillsGrid from './components/SkillsGrid'
import Footer from './components/Footer'
import './App.css'

function App() {

  const skills = [
    {
      name: 'Frontend',
      progress: 60,
      tech: ['HTML', 'JS', 'CSS', 'React'] 
    },
    {
      name: 'Databases',
      progress: 40,
      tech: ['MongoDB', 'SQL'] 
    },
    {
      name: 'Object Oriented Programming',
      progress: 50,
      tech: ['Java'] 
    },
    {
      name: 'Algorithms and Data Structures',
      progress: 70,
      tech: ['Python'] 
    }
  ]


  return (
    <>
      <Navbar/>
      <Intro/>
      <SkillsGrid skills={skills}/>
      <Footer/>
    </>
  )
}

export default App
