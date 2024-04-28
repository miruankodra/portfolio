import './App.css'
import { Nav, Hero, About, Experience , Portfolio, Contact, Footer } from "./components/index.js";

function App() {
  return (
    <div className={`w-full overflow-hidden bg-primary flex flex-col items-center`}>
        <div className={`w-full md:mb-10 mb-36`}>
            <Nav/>
        </div>
        <div className={`w-full flex flex-col items-start justify-between md:px-10 px-5`}>
            <Hero/>
            <About/>
            <Experience/>
            <Portfolio/>
        </div>
        <Contact/>
        <Footer/>

    </div>

  )
}

export default App
