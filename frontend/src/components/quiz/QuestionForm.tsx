import { useState } from "react";
import { QUESTIONS, RATING_SCALE } from "./constants";
import { PersonalityResults, QuestionFormProps } from "./types";
import { savePersonalityResults } from "./storage";

export default function QuestionForm({ onResults }: QuestionFormProps) {
  // Stores the user’s rating for each question ID: { questionId: rating }
  const [answers, setAnswers] = useState<Record<number, number>>({});
  // Tracks which question we’re currently displaying
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = QUESTIONS[currentIndex];

  function handleRatingChange(qId: number, rating: number) {
    setAnswers((prev) => ({
      ...prev,
      [qId]: rating,
    }));
  }

  function handleNext() {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleSubmit() {
    // Calculate factor sums and counts
    const factorSums: Record<string, number> = {};
    const factorCounts: Record<string, number> = {};

    QUESTIONS.forEach((q) => {
      const rating = answers[q.id];
      if (rating) {
        factorSums[q.factor] = (factorSums[q.factor] || 0) + rating;
        factorCounts[q.factor] = (factorCounts[q.factor] || 0) + 1;
      }
    });

    // Compute average per factor
    const factorAverages: Record<string, number> = {};
    for (const factor in factorSums) {
      factorAverages[factor] = factorSums[factor] / factorCounts[factor];
    }

    // Build final results
    const results: PersonalityResults = {
      answers,
      summary: factorAverages,
    };

    savePersonalityResults(results);
    onResults(results);
  }

  return (
    <div>
      {/* Display only the current question */}
      <div key={currentQuestion.id} className="mb-4">
      <p className="text-2xl font-semibold mb-4">{currentQuestion.text}</p>
      <div className="flex gap-4">
        {RATING_SCALE.map((num) => (
          <label key={num} className="flex items-center gap-1">
            <input
              type="radio"
              name={`question-${currentQuestion.id}`}
              value={num}
              checked={answers[currentQuestion.id] === num}
              onChange={() => handleRatingChange(currentQuestion.id, num)}
            />
            {num}
          </label>
        ))}
      </div>
    </div>

      {/* Navigation buttons */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        {currentIndex < QUESTIONS.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-black text-white rounded hover:bg-black-600"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}