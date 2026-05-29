import { Routes, Route } from "react-router-dom"
import AnalyzePrompt from "./pages/AnalyzePrompt"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"


const App = () => {

  return (
    <div>
      {/* Routes start */}
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/analyze-prompt" element={<AnalyzePrompt />} />
      </Routes>
      {/* Routes end */}
      <ToastContainer />
    </div>
  )
}

export default App