import Button from "./ui/Button"

const Hero = () => {
  return (
    <section className="bg-primary min-h-[85vh] md:min-h-[60vh] lg:min-h-[80vh] text-alternate font-poppins flex flex-col items-center justify-center px-5 gap-y-5">
      {/* Contents */}
      <div className="md:max-w-[75%] lg:max-w-2/3 text-center space-y-5 flex flex-col items-center">
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold leading-11.5 lg:leading-15">Stop Guessing Your Way Through System Prompting!</h1>
      <p className="lg:max-w-[60%] ">With prompting being one of the most important factors for the reliability of generatve ai responses, we built Promptana to help developer scan the anatomy of their prompts in real time</p>
      </div>
      {/* ctas */}
      <div className="flex gap-x-4 mt-3">
        <Button ButtonText="Analyze Prompt" variant="primary"/>
        <Button ButtonText="Contact Us" variant="other"/>
      </div>
    </section>
  )
}

export default Hero