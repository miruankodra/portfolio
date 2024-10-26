const CTA = () => {
    return (
        <section id="contact" className={'w-full flex flex-col items-center justify-start mt-28 py-10 px-3'}>
            <div className="bg-transparent w-full">
                <div className="mx-auto w-4/5 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6" />
                                    <stop offset="1" stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto w-full text-center lg:mx-0 lg:flex-auto lg:py-32 flex flex-col items-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-2">Bring your idea to life today.</h2>
                            <p className="mt-6 text-xl leading-8 text-gray-300 w-2/3">Ready to turn your vision into a cutting-edge solution? Let&apos;s bring your idea to life today!</p>
                            <div className="mt-10 w-full flex items-center justify-center gap-x-6">
                                <a href="#contacts" className="rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Reach me out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default CTA;