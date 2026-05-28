import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ScanPrompt from "../components/ScanPrompt"
import WhatWeSolve from "../components/WhatWeSolve"
import OurValues from "../components/OurValues"
import Features from "../components/Features"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
            <Navbar />
            <Hero />
            <ScanPrompt />
            <WhatWeSolve />
            <OurValues />
            <Features />
            <Footer />
    </div>
  )
}

export default Home