import { skills, languages } from "../constants/index.js";
import { SkillCard, LanguageCard } from "./index.js"
const About = () => {
    return(
        <section id="about" className={'w-full flex md:flex-row flex-col justify-between items-start mt-5'}>
            <div className={`flex flex-col md:w-1/2 w-full md:items-start items-center justify-center`}>
                <div className={`w-full`}>
                    <h1 className={'heading1'}>Skills</h1>
                </div>
                <div className={`w-full flex flex-wrap gap-10 md:justify-start justify-center`}>
                    {
                        skills.map((skill, index) => (
                            <SkillCard skill={skill.skill} icons={skill.icon} key={index}/>
                        ))
                    }
                </div>
            </div>
            <div className={'md:w-1/2 w-full h-full flex flex-col md:mt-0 mt-20'}>
                <h1 className={'heading1'}>Languages</h1>
                <div
                    className={`w-full h-full flex md:flex-col flex-wrap gap-10 md:items-start items-center md:justify-between justify-center`}>
                    {
                        languages.map((language, index) => (
                            <LanguageCard language={language.language} proficiency={language.proficiency} key={index}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
export default About;