const Footer = () => {

    const currentYear = new Date().getFullYear();

   return (
       <section id="footer" className={`w-full border-t-[1px] border-dimWhite py-5 px-3 text-start flex flex-col items-start justify-between`}>
            <p className={`mb-3 text-[16px] font-bold`}>&copy; {currentYear} Miruan Kodra. All rights reserved. </p>
            <p className={`text-[14px] text-dimWhite font-semibold`}>
                Crafted in React, detailed in Tailwind, with great care form the artisan!
            </p>
        </section>
   )
};
export default Footer;