import './App.css'
import { Nav, Hero, About, Experience , Portfolio, Contact, Footer } from "./components/index.js";

function App() {
  return (
    <div className={`w-full overflow-hidden bg-primary flex flex-col items-center`}>
        <div className={`w-full md:mb-10 mb-20`}>
            <Nav/>
        </div>
        <div className={`w-full`}>
            <Hero/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>

    </div>

  )
}

export default App
