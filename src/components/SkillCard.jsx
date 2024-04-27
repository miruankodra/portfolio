const SkillCard = ({ skill, icons, onClick }) => (
    <div className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 hover:backdrop-blur-sm duration-300 w-[150px] h-[150px] rounded-[15px] bg-transparent flex flex-col items-center justify-center border-white border-2`}>
        <div className={`w-full h-[64px] flex flex-row items-center justify-center`}>
            {
                icons.map((icon, index) => (
                    <img src={icon} alt={skill} className={'w-[54px] h-[54px]'} key={index} />
                ))
            }

        </div>
        <h1 className={'md:text-[24px] text-[18px] text-dimWhite hover:text-white font-semibold '}>{skill}</h1>
    </div>
)
export default SkillCard;