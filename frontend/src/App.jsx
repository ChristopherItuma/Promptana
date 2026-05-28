import axios from "axios"
import {useState} from "react"


const App = () => {
  const [prompt, setPrompt] = useState("")
  const api = axios.create({
    baseURL:"http://127.0.0.1:8000"
  })

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await api.post("/analyze-prompt", {prompt})
    console.log(response.data.result)
  } 

  return (
    <div>
      <h1 className="text-red-500">Welcome to my Prompt Analysis tool</h1>
      <form>
      <textarea value={prompt} onChange={(e)=>setPrompt(e.target.value)} 
      className="border" id="feedback" name="feedback" rows="4" cols="50">
Enter your comments here...
</textarea>
<button className="border" onClick={handleSubmit}>Submit Form</button>
      </form>
    </div>
  )
}

export default App