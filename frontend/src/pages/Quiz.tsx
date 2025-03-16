import { useState, useEffect } from "react";
import QuestionForm from "../components/quiz/QuestionForm";
import Summary from "../components/quiz/Summary";
import { PersonalityResults } from "../components/quiz/types";
import { loadPersonalityResults } from "../components/quiz/storage";

export default function Quiz() {
  const [results, setResults] = useState<PersonalityResults | null>(null);
  
  useEffect(() => {
    const stored = loadPersonalityResults();
    if (stored) {
      setResults(stored);
    }
  }, []);

  // Called when user submits new results
  function handleResults(newResults: PersonalityResults) {
    setResults(newResults);
  }

  return (
    <div className="px-32 mt-12">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">Let's Get to Know You Better</h1>
      </div>
      <div className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8 border-1 border-black">
        {results ? (
          <Summary results={results} />
        ) : (
          <QuestionForm onResults={handleResults} />
        )}
      </div>
      </div>
    </div>
  );
}
