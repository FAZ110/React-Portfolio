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
      title: 'E-commerce Platform',
      shortDesc: 'A full-stack shopping cart application built with MERN.',
      longDesc: 'Implemented user authentication',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Task Manager App',
      shortDesc: 'A simple to-do list manager using local storage.',
      longDesc: 'Developed a user interface for creating, editing, and deleting tasks. Features persistent data storage using the browser\'s localStorage API.',
      tech: ['React', 'CSS Modules', 'Local Storage']
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
