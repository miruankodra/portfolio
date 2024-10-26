import { powerpeak, evauto } from "../assets/index.js";
const Clients = () => (
    <div className="w-full bg-transparent py-24 sm:py-32">
        <div className="mx-auto w-full px-6 lg:px-8">
            <h2 className="text-center text-4xl font-extrabold leading-8 text-gray-200 mb-5">Clients</h2>
            <div className="mx-auto mt-10 flex flex-wrap items-center justify-around gap-x-8 gap-y-10">
                <a href="https://powerpeak.al" className="cursor-pointer" target="_blank"><img className="col-span-2 h-36 w-full object-contain sm:col-start-2 lg:col-span-1" src={powerpeak} alt="PowerPeak" height="60" /></a>
                <a href="https://miruankodra.github.io/ev-auto-react" className="cursor-pointer" target="_blank"><img className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1" src={evauto} alt="EV Auto" width="158" height="48" /></a>
            </div>
        </div>
    </div>
)
export default Clients;