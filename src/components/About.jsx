// import { profile } from "../assets";

import { angular, bulb, capacitor, cog, javascript, mysql, nestjs, nodejs, scalable, typescript, ubuntu } from "../assets";

const About = () => {
    return(
        <section id="about" className={'w-full flex flex-col items-center mt-5'}>
        <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto md:w-2/3 w-full">
                <h1 className={'text-[18px] text-dimWhite font-extrabold'}><span className="text-[18px] text-white font-extrabold">miruan</span>kodra.</h1>
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>As a passionate software engineer, my journey began in my first year of high school, igniting a lifelong love for programming. Over the years, I&apos;ve collaborated with talented individuals and contributed to innovative startups, while also working with companies and personal clients to bring their visions to life. I thrive on creating impactful solutions that drive progress and foster collaboration.</p>
                    </blockquote>
                </figure>
            </div>
        </section>
        <div className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-[#9089fc] [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                    <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" className="overflow-visible fill-gray-50 opacity-35">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0" />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">About me</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Software Artisan</h1>  
                            <p className="mt-6 text-xl leading-8 text-gray-200">Dedicated to craft the best solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png" alt=""/>
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base text-justify leading-7 text-gray-700 lg:max-w-lg">
                            <p>I specialize in building hybrid mobile applications for both Android and iOS, using technologies like Angular and Capacitor, while also excelling in server-side with Node.js/NestJS and MySQL. My skill set spans from technologies like JavaScript and TypeScript to concepts like IoT, and automation, allowing me to craft seamless, efficient solutions for industrial fields across many platforms. Currently, I&apos;m focusing on developing smart automation systems in the agricultural sector through my startup, 1Acre Solutions, where I build innovative technologies for greenhouse control and other agricultural applications.</p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600 mb-20">
                                <li className="flex gap-x-3">
                                    <img src={bulb} alt="Innovation" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                    <span className="text-gray-400"><strong className="font-semibold text-white">Innovative Technology Solutions.</strong> Developing cutting-edge hybrid mobile and web applications, integrating the latest advancements in software to deliver efficient, high-performance solutions across platforms.</span>
                                </li>
                                <li className="flex gap-x-3">
                                <img src={cog} alt="Automation" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                    <span className="text-gray-400"><strong className="font-semibold text-white">Automation & IoT Integration.</strong> Leveraging IoT and automation technologies to design smart systems, optimizing processes in various industries, with a focus on agriculture and environmental control.</span>
                                </li>
                                <li className="flex gap-x-3">
                                <img src={scalable} alt="Scalable" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                    <span className="text-gray-400"><strong className="font-semibold text-white">Scalable and Sustainable Development.</strong> Building robust, scalable digital products tailored to meet the needs of startups, businesses, and personal clients, ensuring long-term growth and adaptability in an ever-evolving tech landscape.</span>
                                </li>
                            </ul>
                            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                                 <div className="flex space-x-16 animate-loop-scroll hover:animate-none">
                                    <img loading="lazy" src={angular} className="max-w-none h-[64px]" alt="Angular" />
                                    <img loading="lazy" src={capacitor} alt="capacitorjs" className="h-[64px]" />
                                    <img loading="lazy" src={nodejs} className="max-w-none h-[64px]" alt="NodeJs" />
                                    <img loading="lazy" src={nestjs} className="max-w-none h-[64px]" alt="NestJs" />
                                    <img loading="lazy" src={javascript} className="max-w-none h-[64px]" alt="JavaScript" />
                                    <img loading="lazy" src={typescript} className="max-w-none h-[64px]" alt="TypeScript" />
                                    <img loading="lazy" src={mysql} className="max-w-none h-[64px]" alt="MySql" />
                                    <img loading="lazy" src={ubuntu} className="max-w-none h-[64px]" alt="Ubuntu" />
                            
                                    <img loading="lazy" src={angular} className="max-w-none h-[64px]" alt="Angular" />
                                    <img loading="lazy" src={capacitor} alt="capacitorjs" className="h-[64px]" />
                                    <img loading="lazy" src={nodejs} className="max-w-none h-[64px]" alt="NodeJs" />
                                    <img loading="lazy" src={nestjs} className="max-w-none h-[64px]" alt="NestJs" />
                                    <img loading="lazy" src={javascript} className="max-w-none h-[64px]" alt="JavaScript" />
                                    <img loading="lazy" src={typescript} className="max-w-none h-[64px]" alt="TypeScript" />
                                    <img loading="lazy" src={mysql} className="max-w-none h-[64px]" alt="MySql" />
                                    <img loading="lazy" src={ubuntu} className="max-w-none h-[64px]" alt="Ubuntu" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}
export default About;