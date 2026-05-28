import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import SectionTitle from "./ui/SectionTitle";

const Footer = () => {
  return (
    <footer className="bg-primary md:px-12 px-5 py-12 md:py-20 flex flex-col font-poppins">
      <SectionTitle title="Contact Us" />
      <div className="flex flex-col items-center w-full md:w-[70%] mx-auto space-y-5 mt-7">
        <p className="text-white text-center ">
          Promptana was built from a recurring problem I faced while learning AI
          engineering. I noticed there was no clear or standardized way to
          evaluate the reliability of system prompts. Most prompt engineering
          advice felt subjective, inconsistent, or based on trial and error. 
        </p>
        <p className="text-white text-center ">
          So, I built Promptana, a tool designed to help developers analyze prompt
          structure, detect weaknesses, and improve prompt reliability before
          deployment. If you're building AI products, experimenting with LLMs,
          or exploring prompt systems, I’d love to connect.
        </p>
        <p className="text-white italic text-center text-sm md:text-base">
          {" "}
          ~ Ituma Christopher, AI Systems Engineer
        </p>
        <div className="text-secondary text-2xl md:text-3xl flex space-x-4">
          <a href="https://github.com/ChristopherItuma/" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/christopher-ituma/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://wa.me/+2348156056949" target="_blank">
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
