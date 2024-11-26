import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/project"
import Technologies from "./components/Technologies"

function App() {

  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-gradient-to-r from-[#000000] to-[#0f6d82]"></div>

        </div>
        <div className="container mx-auto px-8">
            <Navbar/>
            <Hero/>
            <About />
            <Technologies />
            <Experience />
            <Project />
            <Contact />
        </div>
      </div>
    </>
  )
}

export default App
