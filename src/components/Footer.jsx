import {reactImg} from "../assets/index.js";
const Footer = () => (
    <section id="footer" className={'w-full flex flex-col items-start border-white border-2 mt-10 p-3'}>
        <div className={'w-full flex flex-row items-center justify-start'}>
            <img src={reactImg} alt="Miruan Kodra" className={'w-[128px] h-[128px] mr-5'} />
            <div className={`h-full flex-col items-start justify-around`}>
                <h1 className={`text-[20px] text-start font-semibold `}>Miruan Kodra</h1>
                <p className={`text-[18px] text-start font-normal `}>Full Stack Developer</p>
            </div>
        </div>
        <div></div>
    </section>
);
export default Footer;