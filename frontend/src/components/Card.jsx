import {motion} from "motion/react"
const Card = ({icon, title, subtitle, bgColor, delay}) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.7, delay:delay}}
    viewport={{once:true}}

    className={`bg-${bgColor} p-6 text-white/60 rounded-md shadow-2xl space-y-3`}>
      <div className="text-2xl text-secondary">{icon}</div>
      <h5 className="text-xl italic text-white">{title}</h5>
      <p className="text-sm">{subtitle}</p>
    </motion.div>
  )
}

export default Card