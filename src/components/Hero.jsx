const Hero = () => (
    <section id="home" className={`w-full h-screen flex md:flex-row flex-col items-center md:justify-between justify-start mt-5 px-10`}>
        <div className={`md:w-1/2 w-full h-full flex flex-col items-start justify-center text-center`}>
            <h1 className={'text-[42px] text-start font-semibold mb-3'}>
                <span className={'text-[42px] text-dimWhite font-light'}>I'm </span>
                <br className={'md:hidden block'}/>
                Miruan Kodra
            </h1>
            <h1 className={`text-[52px] text-start text-dimWhite font-semibold`}>
                Software
                <br className={'md:hidden block'}/>
                <span className={`text-white md:text-inherit text-[52px] font-semibold`}> Developer</span>
            </h1>
            <p className={`text-[22px] text-start text-dimWhite font-normal mt-10`}>
                <span className={`text-white font-semibold`}>Skilled Developer </span>
                making my way into the
                <span className={`text-white font-semibold`}> global </span>
                market with
                <span className={`text-white font-semibold`}> commitment </span>
                and great
                <span className={`text-white font-semibold`}> ambition </span>
                for creating
                <span className={`text-white font-semibold`}> innovative </span>
                products.
            </p>
        </div>
        <div className={`md:ml-5 h-full flex flex-col md:justify-center justify-start items-center md:mt-0 mt-20 md:w-1/2 w-full`}>
            <div className={`w-[90%] h-1/3 flex flex-wrap`}>
                <div className={`w-full flex flex-row items-center justify-between mb-4`}>
                    <div className={'w-[10px] h-[10px] bg-white rounded-full'}></div>
                    <h1 className={'text-white text-[20px] font-bold mx-2'}>Software</h1>
                    <div className={'w-2/3 h-[10px] bg-white rounded-full'}></div>
                </div>
                <div className={`w-full flex flex-row items-center justify-between mb-4`}>
                    <div className={'w-2/4 h-[10px] bg-white rounded-full'}></div>
                    <h1 className={'text-white text-[20px] font-bold mx-2'}>Innovation</h1>
                    <div className={'w-[10px] h-[10px] bg-white rounded-full'}></div>
                </div>
                <div className={`w-full flex flex-row items-center justify-between mb-4`}>
                    <div className={'w-1/3 h-[10px] bg-white rounded-full'}></div>
                    <div className={'w-[10px] h-[10px] bg-white rounded-full'}></div>
                    <div className={'w-1/3 h-[10px] bg-white rounded-full'}></div>
                </div>
                <div className={`w-full flex flex-row items-center justify-between mb-4`}>
                    <div className={'w-full h-[10px] bg-white rounded-full'}></div>
                    {/*<h1 className={'text-white text-[20px] font-bold'}>Innovation</h1>*/}
                    {/*<div className={'w-1/4 h-[10px] bg-white rounded-full'}></div>*/}
                </div>
                <div className={`w-full flex flex-row items-center justify-between`}>
                    <div className={'w-1/4 h-[10px] bg-white rounded-full'}></div>
                    <h1 className={'text-white text-[20px] font-bold mx-2'}>Skills</h1>
                    <div className={'w-2/4 h-[10px] bg-white rounded-full'}></div>
                </div>

            </div>

        </div>
    </section>
);
export default Hero;