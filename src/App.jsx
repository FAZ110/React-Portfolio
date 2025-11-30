import { useState } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skill from './components/skill'
import SkillsGrid from './components/SkillsGrid'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
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

  // In App.js (Example Data)
  const projectData = [
    {
      id: 1,
      title: 'Darwin Simulation',
      shortDesc: 'An app to simulate the animals survival on the map',
      longDesc: 'Implemented in Java, every simulation depends on starting parameters like initial animals count, grass spawn rate, map width and height',
      tech: ['Java', 'JavaFX']
    },
    {
      id: 2,
      title: 'DevEvents',
      shortDesc: 'A simple app to track upcoming tech events',
      longDesc: 'Developed a user interface checking the upcoming events and their details, also every event has its own dedicated eventDetails page with more information.',
      tech: ['NextJS', 'tailwindCSS', 'MongoDB']
    }
  ];


  return (
    <>
      <Navbar/>
      <Intro/>
      <Projects projectsData={projectData}/>
      <SkillsGrid skills={skills}/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
