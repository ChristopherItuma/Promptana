import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa"
import SectionTitle from "./ui/SectionTitle"

const Footer = () => {
  return (
    <footer className="bg-primary md:px-12 px-5 py-12 md:py-20 flex flex-col font-poppins">
      <SectionTitle title="Contact Us"/>
      <div className="flex flex-col items-center w-full md:w-[70%] mx-auto space-y-5 mt-7">
        <q className="text-white text-center ">Promptana was built out of a recurring issue i kept facing while learning AI Engineering. I noticed that there no official ways for standardizing the reliability of prompts responses.
          So, i built one to solve this single Problem in ways i deem profitable for use by any one working on an AI project
        </ q>
        <p className="text-white italic text-center text-sm md:text-base"> ~ Ituma Christopher, AI Systems Engineer (In View)</p>
        <div className="text-secondary text-2xl md:text-3xl flex space-x-4">
          <a href="https://github.com/ChristopherItuma/" target="_blank">
          <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/christopher-ituma/" target="_blank">
          <FaLinkedin />
          </a>
          <a href="https://wa.me/+2348156056949" target="_blank">
          <FaWhatsappSquare />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer