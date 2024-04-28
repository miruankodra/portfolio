import {logo, menu, close} from "../assets/index.js";
import {useState} from "react";
const Nav = () => {
    const [ isMenuCollapsed, toggleMenu ] = useState(true);
    return (
        <section id="nav" className={`absolute top-0 left-0 w-full flex flex-row items-center justify-between pt-10 px-5`}>
            <div className={'md:w-1/4 w-auto flex items-baseline justify-start'}>
                <img src={logo} alt="Miruan Kodra" className={`w-[64px] h-[64px]`}/>
                <h1 className={'text-[40px] text-dimWhite font-semibold'}>Kodra</h1>
            </div>
            <div className={'md:w-2/4 w-auto'}>
                <ul className={`md:flex hidden flex-row items-center justify-center text-[18px]`}>
                    <li className={`mr-10`}>
                        <a href="#about">About</a>
                    </li>
                    <li className={`mr-10`}>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className={`mr-0`}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <img src={isMenuCollapsed ? menu : close} alt=""
                     className={`w-[32px] h-[32px] cursor-pointer md:hidden flex`}
                     onClick={() => toggleMenu(prev => !prev)}/>
                <div
                    className={`absolute top-20 right-4 rounded-[15px] text-white text-[18px] w-[150px] bg-dimBlue ${isMenuCollapsed ? 'hidden' : 'flex'} slide-top-to-bottom flex-col items-center justify-start py-5`}>
                    <ul className={`flex flex-col items-center justify-around`}>
                        <li className={`mb-2`}>
                            <a href="#about" onClick={ () => toggleMenu(prev => !prev) }>About</a>
                        </li>
                        <li className={`mb-2`}>
                            <a href="#portfolio" onClick={ () => toggleMenu(prev => !prev) }>Portfolio</a>
                        </li>
                        <li className={`mb-0`}>
                            <a href="#contact" onClick={ () => toggleMenu(prev => !prev) }>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`md:block hidden w-1/4`}></div>
        </section>
    );
}

export default Nav;