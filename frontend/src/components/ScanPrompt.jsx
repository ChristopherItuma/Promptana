import { useState } from "react"
import SectionTitle from "./ui/SectionTitle"
import { api } from "../config/axios"
import { toast, ToastContainer } from "react-toastify"
import { FiLoader } from "react-icons/fi"
import AnalysisResult from "./AnalysisResult"
const ScanPrompt = () => {
  const [prompt, setPrompt] = useState("")
  const [result, setResult]=useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async(e) =>{
   e.preventDefault()

   if(prompt.trim() === ""){
    console.log("enter prompt first")
    toast.error("Enter prompt first")
   }
   else{
   try {
    setLoading(true)
    const response =await api.post("/analyze-prompt", {prompt})
    setResult(response.data.result)
    toast.success("Analysis Completed")
    setPrompt("")
   } catch (err) {
    console.log(err)
    toast.error(
        err?.response?.data?.detail ||
        "Something went wrong"
      );
   }
   finally{
    setLoading(false)
    setPrompt("")
   }
  }
  }
  return (
    <section className="bg-primary/97 md:px-12 px-5 py-12 md:py-20 flex flex-col font-poppins">
      <SectionTitle title="Explore The Anatomy Of Your Prompt"/>
      {/*Prompt Submission Form */}
      <form onSubmit={handleSubmit} className="lg:w-[60%] md:w-[80%] w-full flex flex-col mx-auto gap-y-3 md:my-10 my-8">
        <label htmlFor="prompt" className="text-left text-alternate">Paste Your System Prompt:</label>
        <textarea placeholder="You are a healthcare AI..."  name="prompt" id="prompt" value={prompt} onChange={(e)=>setPrompt(e.target.value)} className="border border-secondary-fade outline-none focus:border-secondary focus:border-2 rounded-md w-full placeholder:text-alternate/60 p-3 
        min-h-60 text-white"></textarea>
        <div className=" flex justify-end mt-2">
        <button type="submit" className="font-poppins px-8 py-2 rounded-md  text-alternate bg-secondary">
          {
            loading ? <div className="flex gap-x-2 items-center justify-center">
              <FiLoader className="animate-spin"/> Analyzing Prompt...
            </div>:"Analyze Prompt"
          }
        </button>
        </div>
      </form>

      {/* Display Results After Loading */}
       <AnalysisResult result={result}/>
      {/* End of Display */}
      <ToastContainer />
    </section>
  )
}

export default ScanPrompt