import { FiAlertTriangle, FiCheckCircle, FiZap, FiCopy } from "react-icons/fi";
import { PiBrain } from "react-icons/pi";
import ListCard from "./ui/ListCard";
import ScoreCard from "./ui/ScoreCard";
import { toast } from "react-toastify";
import { FaRegLightbulb } from "react-icons/fa";
const AnalysisResult = ({ result }) => {
  const copyPrompt = () => {
    navigator.clipboard.writeText(result.rewritten_prompt);

    toast.success("Prompt copied");
  };
  return (
    <>
      {result && (
        <section className="lg:w-[80%] md:w-[90%] w-full mx-auto ">
          <h3 className="text-secondary text-2xl my-5">
            Prompt Type:{" "}
            <span className="text-alternate">{result.prompt_type}</span>
          </h3>
          {/* Score Card Displays */}
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 w-full">
            <ScoreCard
              title="Clarity Score"
              value={`${result.clarity_score}/10`}
            />
            <ScoreCard
              title="Specificity Score"
              value={`${result.specificity_score}/10`}
            />
            <ScoreCard
              title="Ambiguity Score"
              value={`${result.ambiguity_score}/10`}
            />
            <ScoreCard
              title="Hallucination Risk"
              value={`${result.hallucination_risk}/10`}
            />
            <ScoreCard
              title="Constraint Score"
              value={`${result.constraint_score}/10`}
            />
            <ScoreCard
              title="Overall Score"
              value={`${result.overall_score}/10`}
            />
          </div>
          {/* List Display */}
          <div className="grid lg:grid-cols-2 gap-5 my-12">
            <ListCard
              items={result.strengths}
              color="#00A300"
              title="Strenghts: "
              icon={<FiCheckCircle />}
            />
            <ListCard
              items={result.weaknesses}
              color="#D10000"
              title="Weaknesses: "
              icon={<FiAlertTriangle />}
            />
            <ListCard
              items={result.missing_elements}
              color="#A3A300"
              title="Missing Elements: "
              icon={<FiZap />}
            />
            <ListCard
              items={result.improvements}
              color="#00A3A3"
              title="Improvements: "
              icon={<FiCheckCircle />}
            />
          </div>
          <hr className="border-secondary"/>
          {/* Summary points */}
          {/* Ai Written Prompt */}
          <div className="mt-8 p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <div className="flex justify-between">
              <h3 className="font-bold text-2xl text-secondary">
                AI Rewritten Prompt
              </h3>

              <button
                className="text-secondary cursor-pointer"
                onClick={copyPrompt}
              >
                <FiCopy />
              </button>
            </div>

            <p className="mt-5 text-slate-300 whitespace-pre-wrap">
              {result.rewritten_prompt}
            </p>
          </div>
          {/* Learning Note */}
          <div className="mt-8 p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <div className="flex justify-between">
            <h3 className="text-xl font-bold text-secondary">Learning Note</h3>
            <FaRegLightbulb className="text-secondary"/>
            </div>

            <p className="mt-4 text-slate-300">{result.learning_note}</p>
          </div>
         {/* Score Reasoning */}
          <div className="mt-8 p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <div className="flex justify-between">
            <h3 className="text-xl font-bold text-secondary">Score Reasoning</h3>
            <PiBrain className="text-secondary"/>
            </div>

            <p className="mt-4 text-slate-300">{result.score_reasoning}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default AnalysisResult;
