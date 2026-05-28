import { values } from "../data/Values"
import SectionTitle from "./ui/SectionTitle"
import Card from "./Card"

const OurValues = () => {
  return (
    <section className="bg-primary md:px-12 px-5 py-12 md:py-20 flex flex-col font-poppins">
      <SectionTitle title="Why Use Promptana"/>
      <div className="grid md:grid-cols-3 gap-5 lg:w-[80%] mx-auto mt-7">
      {
        values.map((item,index)=>(
          <Card key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} bgColor="alternate-background"/>
        ))
      } 
      </div>    
    </section>
  )
}

export default OurValues