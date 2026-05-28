import Button from "./ui/Button"
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <section className="lg:bg-radial-[at_50%_50%] md:bg-radial-[at_50%_40%] bg-radial-[at_50%_50%] from-secondary/70 to-primary 
   md:to-10% to-15% lg:to-15% min-h-[85vh] md:min-h-[60vh] lg:min-h-[80vh] text-alternate font-poppins flex flex-col items-center justify-center px-5 gap-y-5 bg-fixed">
      {/* Contents */}
      <div className="md:max-w-[75%] lg:max-w-2/3 text-center space-y-5 flex flex-col items-center">
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold leading-11.5 lg:leading-15">Stop Guessing Prompt Quality</h1>
      <p className="lg:max-w-[60%] ">Promptana helps developers understand the anatomy of their prompts through real-time analysis, structured scoring, and actionable improvements.</p>
      </div>
      {/* ctas */}
      <div className="flex gap-x-4 mt-3">
        <Link to="/analyze-prompt">
        <Button ButtonText="Analyze Prompt" variant="primary"/>
        </Link>
        <Link to="https://www.linkedin.com/in/christopher-ituma/" target="_blank">
        <Button ButtonText="Contact Us" variant="other"/>
        </Link>
      </div>
    </section>
  )
}

export default Hero