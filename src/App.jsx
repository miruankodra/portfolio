import './App.css'
import { Nav, Hero, About, Clients, Portfolio, Contact, Footer } from "./components/index.js";

function App() {
  return (
    <div className={`w-full overflow-hidden bg-primary flex flex-col items-center`}>
        <div className={`w-full z-50`}>
            <Nav/>
        </div>
        <div className={`w-full flex flex-col items-start justify-between px-5`}>
            <Hero/>
            <About/>
            <Clients/>
            {/* <Portfolio/> */}
        </div>
        <Contact/>
        <Footer/>

    </div>

  )
}

export default App
