const PortfolioCard = ({description, techs, title, cover}) => (
        <div className={`md:w-[32%] w-full h-[200px] flex flex-row items-center justify-between rounded-[15px] bg-dimBlue`}>
            <div className={`w-1/3 h-full rounded-l-[15px]`}>
                <img src={cover} alt={title} className="w-full h-full object-cover rounded-l-[15px]"/>
            </div>
            <div className={`w-2/3 h-full flex flex-col items-start justify-center pl-4 pr-1 py-3`}>
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-start">{title}</h4>
                <p className="font-poppins font-normal text-[18px] leading-[32px] text-white text-start">{description}</p>
                <div className={`w-full flex flex-row items-center justify-start gap-2`}>
                    {
                        techs.map((tech, index) => (
                            <img src={tech} alt="Used Technology" className={'w-[32px] h-[32px]'} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
);

export default PortfolioCard;