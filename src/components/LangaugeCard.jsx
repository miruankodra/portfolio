import { star, outlineStar } from "../assets/index.js";
const LanguageCard = ({ language, proficiency }) => {

    const printProficiency = () => {
        switch (proficiency) {
            case 1:
                return 'Beginner';
            case 2:
                return 'Elementary';
            case 3:
                return 'Intermediate';
            case 4:
                return 'Advanced';
            case 5:
                return 'Proficient';
            default:
                return 'Unknown';
        }
    }

    const printStars = () => {
        let imgElements = [];
        for (let i = 0; i <= 5; i++) {
            imgElements.push(<img src={i <= proficiency ? star : outlineStar} alt="icon" className="w-[50%] h-[50%] object-contain"/>);
        }
        return imgElements;
    }

    return (
        <div className={`md:w-[90%] w-[150px] md:h-[100px] h-[150px] border border-dimWhite flex md:flex-row flex-col md:justify-between items-center p-6 rounded-[20px] md:mb-1`}>
            <div className="md:w-1/3 w-full flex-1 flex flex-col md:items-start items-center justify-center md:ml-3 ml-0 md:mb-0 mb-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                    {language}
                </h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                    {
                        printProficiency()
                    }
                </p>
            </div>
            <div className={`h-[64px] md:w-2/3 w-full md:flex hidden flex-row items-center rounded-full`}>
                {
                    printStars()
                }
            </div>
        </div>
    )
}
export default LanguageCard;