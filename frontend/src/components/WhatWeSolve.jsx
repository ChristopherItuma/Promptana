import { whatWeSolve } from "../data/whatWeSolveContent"
import Card from "./Card"
import SectionTitle from "./ui/SectionTitle"

const WhatWeSolve = () => {
  return (
    <section className="bg-primary/95 md:px-12 px-5 py-12 md:py-20 flex flex-col font-poppins">
     <SectionTitle title="Why Promptana Exists"/>
     <div className="grid md:grid-cols-3 gap-5 lg:w-[80%] mx-auto mt-7">
      {
        whatWeSolve.map((item,index)=>(
          <Card key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} bgColor="primary" />
        ))
      }
     </div>
    </section>
  )
}

export default WhatWeSolve