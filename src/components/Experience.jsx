import { workExp, education } from "../constants/index.js";

const Experience = () => {
    return (
        <section id="experience" className="w-full flex md:flex-row flex-col items-start justify-around mt-20 px-5">
            <div className={`md:1/2 w-full flex flex-col items-start md:mb-0 mb-10`}>
                <h1 className={'heading1'}>Work Experience</h1>
                <ul className={'list-disc'}>
                    {
                        workExp.map((experience, index) => (
                            <li key={index} className={'mb-10'}>
                                <div className={'w-full flex flex-col items-start'}>
                                    <h1 className={'text-[22px] text-white font-semibold text-start'}>
                                        {experience.position}
                                    </h1>
                                    <span className={'text-[18px] text-dimWhite font-light italic text-start'}>
                                        {experience.timespan}
                                    </span>
                                    <h1 className={'text-[18px] text-white font-semibold text-start'}>
                                        {experience.company}
                                    </h1>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={`md:1/2 w-full flex flex-col items-start`}>
                <h1 className={'heading1'}>Education</h1>
                <ul className={`list-disc`}>
                    {
                        education.map((edu, index) => (
                            <li key={index} className={'mb-10'}>
                                <div className={'w-full flex flex-col items-start'}>
                                    <h1 className={'text-[22px] text-white font-semibold text-start'}>
                                        {edu.program}
                                    </h1>
                                    <span className={'text-[18px] text-dimWhite font-light italic text-start'}>
                                        {edu.timespan}
                                    </span>
                                    <h1 className={'text-[18px] text-white font-semibold text-start'}>
                                        {edu.institution}
                                    </h1>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
export default Experience;