import { PersonalityResults } from "./types";

interface SummaryProps {
  results: PersonalityResults;
}

export default function Summary({ results }: SummaryProps) {
  const { summary } = results; // factor => average rating

  return (
    <div>
      <div className="text-2xl font-semibold mb-4">Your Summary</div>
      <p className="text-l text-gray-600 mb-2">
        Average ratings:
      </p>
      <ul className="ml-4 list-disc">
        {Object.keys(summary).map((factor) => (
          <li key={factor}>
            <span className="text-l">{factor}:</span>{" "}
            {summary[factor].toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}