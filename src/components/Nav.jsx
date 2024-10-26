import {menu, close} from "../assets/index.js";
import {useState} from "react";
const Nav = () => {
    const [ isMenuCollapsed, toggleMenu ] = useState(true);
    return (
        <section id="nav" className={`absolute top-0 left-0 w-full flex flex-col items-center justify-start pt-10`}>
            <div className="w-full flex flex-row items-center justify-between md:px-20 px-10 mb-4">
                <div className={'md:w-1/4 w-auto flex items-baseline justify-start'}>
                    {/* <img src={logo} alt="Miruan Kodra" className={`w-[64px] h-[64px]`}/> */}
                    <h1 className={'sm:block hidden text-[40px] text-dimWhite font-extrabold'}><span className="text-[40px] text-white font-extrabold">miruan</span>kodra.</h1>
                    <h1 className={'sm:hidden block text-[40px] text-dimWhite font-extrabold'}><span className="text-[40px] text-white font-extrabold">m</span>k.</h1>
                </div>
                <div className={'relative w-auto z-50'}>
                    <ul className={`h-[64px] relative z-50 px-10 *:!font-bold md:flex hidden flex-row items-center justify-center text-[18px] bg-indigo-600 rounded-2xl`}>
                        <li className={`mr-10 cursor-pointer`}>
                            <a href="#about">About</a>
                        </li>
                        {/* <li className={`mr-10 cursor-pointer`}>
                            <a href="#portfolio">Portfolio</a>
                        </li> */}
                        <li className={`mr-0 cursor-pointer`}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <img src={isMenuCollapsed ? menu : close} alt=""
                        className={`w-[32px] h-[32px] cursor-pointer md:hidden flex`}
                        onClick={() => toggleMenu(prev => !prev)}/>
                </div>
            </div>
            
            
            <div className={`md:hidden w-full sm:px-20 px-5 z-0 relative overflow-hidden text-white text-[18px] flex flex-col items-center justify-start`}>
                <ul className={`transition-all duration-300 ease-in-out ${isMenuCollapsed ? 'translate-x-[150%] opacity-0' : 'translate-x-0 opacity-100'} flex flex-row items-center justify-around w-full *:font-semibold  bg-indigo-600 rounded-[15px] p-3`}>
                    <li className={``}>
                        <a href="#about" onClick={ () => toggleMenu(prev => !prev) }>About</a>
                    </li>
                    {/* <li className={``}>
                        <a href="#portfolio" onClick={ () => toggleMenu(prev => !prev) }>Portfolio</a>
                    </li> */}
                    <li className={``}>
                        <a href="#contact" onClick={ () => toggleMenu(prev => !prev) }>Contact</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Nav;