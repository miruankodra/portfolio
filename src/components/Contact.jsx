import { useRef, useState } from "react";
import { call, mail } from "../assets";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isNameValid, toggleNameValidation] = useState(true);
  const [isPhoneValid, togglePhoneValidation] = useState(true);
  const [isVisible, toggleMessage] = useState(false);
  const [isSuccess, toggleIsSuccess] = useState(true);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!form.current.name.value || form.current.name.value === "") {
        toggleNameValidation(false);
        return;
    } else {
        toggleNameValidation(true);
    }

    if (!form.current.phone.value || form.current.phone.value === "") {
        togglePhoneValidation();
        return;
    } else {
        togglePhoneValidation(true);
    }

    emailjs
      .sendForm('service_5ybl2h7', 'template_k1ug1n9', form.current, {
        publicKey: '1HiAPTHNRassowr5W',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toggleMessage(true);
          toggleIsSuccess(true);
          setMessage("Your message has been sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          toggleMessage(true);
          toggleIsSuccess(false);
          setMessage(error.text ?? "Failed to send message! Try again later.");
        },
      );
      setTimeout(() => {
        toggleMessage(false);
      }, 3000);
  };
    return (
        <section className="bg-transparent w-4/5 *:text-start" id="contact">
            <div className="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                            Contact
                        </p>
                        <h2
                            className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                            Get in Touch
                        </h2>
                        {/* <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
                dictumst
            </p> */}
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                Let&apos;s Connect: Ready to Collaborate on Your Next Big Project? Reach Out Today!
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex">
                                    <a href="tel:+355675789678" target="_base" className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <img src={call} alt="Phone" className="h-2/3" />
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                            </h3>
                                            <p className="text-gray-600 dark:text-slate-400">+355 67 578 9678</p>
                                        </div>
                                    </a>
                                </li>
                                <li className="flex">
                                    <a href="mailto:miruankodra@gmail.com" target="_base" className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <img src={mail} alt="Email" className="w-2/3" />
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                            </h3>
                                            <p className="text-gray-600 dark:text-slate-400">miruankodra@gmail.com</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card h-fit w-full p-5 md:p-12" id="form">
                            <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                
                                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} w-full px-3 py-5 text-left text-lg font-medium text-white rounded-2xl mb-4 ${ isSuccess ? 'bg-indigo-600' : 'bg-red-600' }`}>
                                    {message}
                                </div>
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className={`mx-0 ${isNameValid ? 'sm:mb-4' : null} mb-1 `}>
                                            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0" name="name" />
                                        </div>
                                        {
                                            isNameValid? null : (
                                                <p className="text-md text-left text-red-600 font-light mb-1 sm:mb-4">*Name is required!</p>
                                            )
                                        }
                                        <div className={`mx-0 ${isPhoneValid ? 'sm:mb-4' : null} mb-1`}>
                                            <label htmlFor="phone" className="pb-1 text-xs uppercase tracking-wider"></label><input type="tel" id="phone" autoComplete="phone" placeholder="Your phone number" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0" name="phone" />
                                        </div>
                                        {
                                            isPhoneValid? null : (
                                                <span className="text-md text-left text-red-600 font-light">*Phone is required!</span>
                                            )
                                        }
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="notes" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0"></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <input type="submit" value="Let's talk!" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Contact