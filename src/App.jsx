import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'


const App = () => {
    return (
        <>
            <Header />
            <Navigation />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Contacts />
            <Footer />
        </>
    )
}

export default App