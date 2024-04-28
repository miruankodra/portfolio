import { logo } from "../assets/index.js";
import {contacts, socials} from "../constants/index.js";

const Contact = () => (
    <section id="contact" className={'w-full flex md:flex-row flex-col items-center justify-around gap-5 border-white border-t-2 mt-28 py-10 px-3'}>
        <div className={'md:w-1/4 w-full flex flex-col items-start justify-start md:mb-0 mb-10'}>
            <div className={`w-full flex flex-row items-center justify-start`}>
                <img src={logo} alt="Miruan Kodra" className={'w-[128px] h-[128px] mr-5'}/>
                <div className={`h-full flex-col items-start justify-around`}>
                    <h1 className={`text-[22px] text-start font-semibold `}>Miruan Kodra</h1>
                    <p className={`text-[20px] text-start font-normal text-dimWhite `}>Software Developer</p>
                </div>
            </div>
            <div className={`w-full pt-3 pl-2`}>
                <p className={`text-[18px] text-dimWhite text-start font-semibold`}>A software artisan dedicated to
                    crafting high quality masterpieces.</p>
            </div>
        </div>
        <div className={'md:w-auto w-full flex flex-col items-start justify-around md:mb-0 mb-5'}>
            <ul className={'md:pl-0 pl-5'}>
                {
                    contacts.map((contact, index) => (
                        <li className={`flex flex-col items-start justify-start mb-5`} key={index}>
                            <h1 className={'text-[20px] text-start text-white font-semibold'}>{contact.type}:</h1>
                            <h1 className={'text-[20px] text-start text-dimWhite font-semibold'}>{contact.value}</h1>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className={`md:w-auto w-full flex flex-col items-start justify-around gap-5 md:mb-0 mb-10 md:pr-20 md:pl-0 pl-5`}>
            <h1 className={'text-[20px] text-white text-start font-semibold'}>
                Do you think we can work together.
                <br/>
                Lets chat!
            </h1>
            {/*<button className={'transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-zomp duration-300 bg-dimBlue rounded-[15px] p-4 border-white border-2 text-dimWhite'}>*/}
            {/*    Send me an Email!*/}
            {/*</button>*/}
            <p className={'text-dimWhite'}>Reach me through my contacts and I'll reply as soon as I can!</p>
        </div>
        <div className={`md:w-auto w-full flex md:flex-col flex-row md:items-end items-center justify-around md:gap-5 gap-10 md:pr-20`}>
            {
                socials.map((social, index) => (
                    <a href={social.link} key={index} target="_blank">
                        <img src={social.icon} alt={social.name} className={'w-[32px] h-[32px] transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300'}/>
                    </a>
                ))
            }
        </div>
    </section>
);

export default Contact