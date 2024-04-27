import { skills, languages } from "../constants/index.js";
import { SkillCard, LanguageCard } from "./index.js"
const About = () => {
    return(
        <section id="about" className={'w-full flex md:flex-row flex-col justify-between items-start mt-20'}>
            <div className={`flex flex-col md:w-1/2 w-full md:items-start items-center justify-center`}>
                <h1 className={'heading1 mb-10 md:ml-28 '}>Skills</h1>
                <div className={`w-full flex flex-wrap gap-10 justify-center md:px-20`}>
                    {
                        skills.map((skill, index) => (
                            <SkillCard skill={skill.skill} icons={skill.icon} key={index}/>
                        ))
                    }
                </div>
            </div>
            <div className={`md:w-1/2 w-full h-full px-3 flex md:flex-col flex-wrap gap-10 md:items-start items-center md:justify-between justify-center md:mt-0 mt-20`}>
                <h1 className={'heading1'}>Languages</h1>
                {
                    languages.map((language, index) => (
                        <LanguageCard language={language.language} proficiency={language.proficiency} key={index}/>
                    ))
                }
            </div>
        </section>
    );
}
export default About;