import { chevron } from "../assets";

const Hero = () => (
    <section id="home" className={`w-full h-screen flex flex-col items-center justify-center md:px-10`}>
        <div className="w-full relative isolate px-6 pt-14 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                </div>
            </div> */}
            <div className="text-center">
                <h1 className="text-2xl font-semibold tracking-tight text-gray-500 sm:text-5xl mb-4">Hello there!</h1>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">I&apos;m <br className="md:hidden block"/> <span className="text-white font-bold"> Miruan Kodra</span>, Software <span className="text-white font-bold"> Engineer</span></h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    <span className={`text-white font-semibold`}>Skilled Software Engineer </span>
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
                <div className="mt-10 flex items-center justify-center gap-x-6 *:text-left">
                    <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Portfolio</a>
                    <a href="#" className="transition-all group text-lg font-semibold leading-6 text-gray-400 hover:text-white flex flex-row items-center">More About Me <div className="transition-all group-hover:animate-pushRight"><img src={chevron} alt="About" className="-rotate-90 w-5 ml-2" /></div></a>
                </div>
            </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
        </div>
        
    </section>
);
export default Hero;