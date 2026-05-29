import { features } from "../data/features"
import SectionTitle from "./ui/SectionTitle"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {motion} from "motion/react"
const Features = () => {
  return (
    <section className="bg-primary/97 md:px-12 px-5 py-12 md:py-20 flex flex-col font-poppins">
      <SectionTitle title="Our Features"/>
      <div className="mt-7 flex flex-col md:flex-row w-full items-start md:items-center justify-evenly md:w-[90%] lg:w-[80%] mx-auto space-y-5">
      <motion.ul 
      initial={{opacity:0, x:-100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.9, ease:"easeInOut"}}
      viewport={{once:true}}
      
      className="text-white  space-y-5">
        {
          features.slice(0,6).map((item, index)=>(
            <li key={index} className="flex items-center gap-x-2">
              <IoMdCheckmarkCircleOutline className="text-secondary text-2xl"/>
              {item}
            </li>
          ))
        } 
      </motion.ul>
      
      <motion.ul 
      initial={{opacity:0, x:100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.9, ease:"easeInOut"}}
      viewport={{once:true}}      
      className="text-white  space-y-5">
        {
          features.slice(6).map((item, index)=>(
            <li key={index}  className="flex items-center gap-x-2">
              <IoMdCheckmarkCircleOutline className="text-secondary text-2xl"/>
              {item}
            </li>
          ))
        } 
      </motion.ul>
      </div>
    </section>
  )
}

export default Features