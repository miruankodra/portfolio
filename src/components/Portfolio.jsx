import PortfolioCard from './PortfolioCard';
import {projects} from "../constants/index.js";
const Portfolio = () => {
    return (
        <section id="portfolio" className={'w-full flex flex-col items-start mt-52'}>
            <h1 className={'heading1 ml-5 mb-10 text-start'}>My Portfolio: Coffee turned into code!</h1>
            <div className={'w-full flex flex-wrap gap-5 justify-around md:px-16 px-3'}>
                {

                    projects.map((project, index) => (
                        <PortfolioCard title={project.title} description={project.description} cover={project.cover}
                                       key={index} techs={project.icons}/>
                    ))
                }
            </div>


        </section>
    );
}
export default Portfolio