import {motion} from "motion/react"
const SectionTitle = ({title}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.7}}
    viewport={{once:true}}
    >
      <h3 className="md:text-4xl text-3xl text-center font-semibold font-poppins text-secondary/80">{title}</h3>
    </motion.div>
  )
}

export default SectionTitle