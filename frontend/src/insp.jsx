import axios from "axios";
import { useState } from "react";
import {
  FiAlertTriangle,
  FiCheckCircle,
  FiZap,
  FiLoader,
  FiCopy
} from "react-icons/fi";
import { toast } from "react-toastify";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const api = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) {
      toast.error("Enter a prompt first");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
        "/analyze-prompt",
        { prompt }
      );

      setResult(response.data.result);

      toast.success("Analysis complete");

    } catch (err) {

      toast.error(
        err?.response?.data?.detail ||
        "Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(
      result.rewritten_prompt
    );

    toast.success(
      "Prompt copied"
    );
  };


  return (

<div className="min-h-screen bg-slate-950 text-white">

{/* HERO */}

<section className="bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500">

<div className="max-w-7xl mx-auto px-6 py-28 text-center">

<div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-8">

Prompt Intelligence Platform

</div>

<h1 className="text-5xl md:text-7xl font-bold leading-tight">

Stop guessing prompt quality.

<span className="block text-cyan-200">

Audit. Improve. Ship better AI.

</span>

</h1>

<p className="max-w-2xl mx-auto mt-8 text-lg text-slate-100">

Find ambiguity, hallucination risk, weak constraints and hidden prompt issues before users do.

</p>

</div>

</section>


{/* VALUE */}

<section className="max-w-7xl mx-auto px-6 py-16">

<div className="grid md:grid-cols-3 gap-5">

<div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:-translate-y-2 transition">

<h3 className="font-bold">

Reduce Hallucinations

</h3>

<p className="text-slate-400 mt-3">

Detect weak prompts that create invented responses.

</p>

</div>


<div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:-translate-y-2 transition">

<h3 className="font-bold">

Find Missing Constraints

</h3>

<p className="text-slate-400 mt-3">

Spot hidden prompt weaknesses before production.

</p>

</div>


<div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:-translate-y-2 transition">

<h3 className="font-bold">

Rewrite Automatically

</h3>

<p className="text-slate-400 mt-3">

Generate stronger versions instantly.

</p>

</div>

</div>

</section>


{/* PLAYGROUND */}

<section className="max-w-5xl mx-auto px-6">

<form
onSubmit={handleSubmit}
className="bg-slate-900 rounded-3xl p-8 border border-slate-800"
>

<h2 className="text-3xl font-bold">

Prompt Playground

</h2>

<p className="text-slate-400 mt-2">

Paste your system prompt

</p>


<textarea
value={prompt}
onChange={(e)=>setPrompt(e.target.value)}
className="mt-6 w-full h-40 rounded-2xl bg-slate-950 border border-slate-700 p-5 outline-none focus:border-cyan-500"
placeholder="You are a healthcare AI..."
/>


<button
type="submit"
disabled={loading}
className="mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition flex items-center gap-3"
>

{loading ?

<>

<FiLoader className="animate-spin"/>

Analyzing Prompt...

</>

:

"Analyze Prompt"

}

</button>

</form>

</section>


{/* RESULTS */}

{result && (

<section className="max-w-7xl mx-auto px-6 py-20">

<div className="grid lg:grid-cols-4 gap-5">

<Card
title="Overall Score"
value={`${result.overall_score}/10`}
/>

<Card
title="Hallucination"
value={`${result.hallucination_risk}/10`}
/>

<Card
title="Ambiguity"
value={`${result.ambiguity_score}/10`}
/>

<Card
title="Constraints"
value={`${result.constraint_score}/10`}
/>

</div>


<div className="grid md:grid-cols-2 gap-6 mt-8">

<ListCard
title="Strengths"
color="green"
icon={<FiCheckCircle/>}
items={result.strengths}
/>


<ListCard
title="Weaknesses"
color="red"
icon={<FiAlertTriangle/>}
items={result.weaknesses}
/>

</div>


<div className="grid md:grid-cols-2 gap-6 mt-8">

<ListCard
title="Missing Elements"
color="yellow"
icon={<FiZap/>}
items={result.missing_elements}
/>


<ListCard
title="Improvements"
color="cyan"
icon={<FiCheckCircle/>}
items={result.improvements}
/>

</div>


<div className="mt-8 p-8 rounded-3xl bg-slate-900 border border-slate-800">

<div className="flex justify-between">

<h3 className="font-bold text-2xl">

AI Rewritten Prompt

</h3>

<button
onClick={copyPrompt}
>

<FiCopy/>

</button>

</div>


<p className="mt-5 text-slate-300 whitespace-pre-wrap">

{result.rewritten_prompt}

</p>

</div>


<div className="mt-8 p-8 rounded-3xl bg-gradient-to-r from-purple-900 to-slate-900">

<h3 className="text-xl font-bold">

Learning Note

</h3>

<p className="mt-4 text-slate-300">

{result.learning_note}

</p>

</div>

</section>

)}

</div>

  );
};



function Card({title,value}){

return(

<div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">

<p className="text-slate-400">

{title}

</p>

<h2 className="text-5xl font-bold mt-4">

{value}

</h2>

</div>

)

}



function ListCard({
title,
items,
icon
}){

return(

<div className="rounded-3xl p-6 bg-slate-900 border border-slate-800">

<div className="flex items-center gap-2">

{icon}

<h3 className="font-bold">

{title}

</h3>

</div>


<ul className="space-y-3 mt-5">

{items.map(
(item,index)=>(

<li
key={index}
className="text-slate-300"
>

• {item}

</li>

)

)}

</ul>

</div>

)

}


export default App;