import Link from "next/link";
import ContactForm from "./ContactForm";
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
const ContactSection = (props) => {
  return (
    <div className="flex flex-col py-20 bg-[url(/swirl.svg)] bg-cover bg-no-repeat items-center justify-center">
      <div className="p-10 lg:w-3/4 bg-white bg-opacity-80 rounded-lg shadow-lg justify-center mx-2">
        <h3 className="text-5xl md:text-7xl uppercase font-clone font-extrabold text-purp-dark text-left md:text-center">
          Contact Us
        </h3>
        <h3 className="text-md md:text-xl my-4 font-ibm font-bold text-purp-dark text-left md:text-center">
          Please reach out to us using the contact form below if you have any
          questions for us! Whether you are new to cannabis or an experienced
          connoisseur; I am confident that we can help you find what you need.
        </h3>

        <h3 className="text-md md:text-xl font-ibm font-bold text-purp-dark text-left md:text-center pt-4">
          Businesses, entrepreneurs, and hobbyists are welcome to contact us as
          well to learn more about our consultation services and wholesale
          programs! Feel free to ask us anything!
        </h3>
        <div className="flex flex-col md:flex-row gap-8 h-auto">
          <div className="flex flex-col md:w-1/2 m-4 order-2 md:order-1 ">
            <div className="flex flex-col rounded-xl p-4 bg-purp-dark text-white text-xl mt-4 text-center shadow-md">
              <h4 className="font-thin font-clone text-center py-2">
                <span className="flex flex-row gap-2 items-center justify-center">
                  <IoMdCall /> Call or Text Us:
                </span>
              </h4>
              <p className=" font-thin font-ibm text-center text-green-light  ">
                <a href="tel:+15404801205">(540)-480-1205</a>
              </p>
              <h4 className="font-thin font-clone text-center py-2">
                <span className="flex flex-row gap-2 items-center justify-center">
                  <MdOutlineEmail /> Email Us:
                </span>
              </h4>
              <p className=" font-thin font-ibm text-center pb-2  text-green-light ">
                <a href="mailto: docjslaboratory@gmail.com">
                  Docjslaboratory@gmail.com
                </a>
              </p>
              <h4 className="font-thin font-clone text-center py-2">
                <span className="flex flex-row gap-2 items-center justify-center">
                  <FaInstagram /> Instagram:
                </span>
              </h4>
              <Link href="https://www.instagram.com/docjs.laboratory/">
                <p className="text-md font-thin font-ibm text-center px-8 py-2 text-green-light ">
                  @DocJs.Laboratory
                </p>
              </Link>
              <Link href="https://www.instagram.com/waterbearfarms/">
                <p className="text-md font-thin font-ibm text-center px-8 py-2 text-green-light ">
                  @WaterbearFarms
                </p>
              </Link>
              <Link href="https://www.instagram.com/moglee_cultivated_/">
                <p className="text-md font-thin font-ibm text-center px-8 py-2 text-green-light ">
                  @Moglee_Cultivated
                </p>
              </Link>
              <Link href="https://www.instagram.com/gamblesgoods/">
                <p className="text-md font-thin font-ibm text-center px-8 py-2 text-green-light ">
                  @GamblesGoods
                </p>
              </Link>
              <Link href="https://www.instagram.com/gamblesgarden_/">
                <p className="text-md font-thin font-ibm text-center px-8 py-2 text-green-light ">
                  @GamblesGarden_
                </p>
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
