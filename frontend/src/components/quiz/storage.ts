import { PersonalityResults } from "./types";

const STORAGE_KEY = "personalityTestResults";

export function savePersonalityResults(results: PersonalityResults): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}

export function loadPersonalityResults(): PersonalityResults | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as PersonalityResults;
  } catch {
    return null;
  }
}

export function clearPersonalityResults(): void {
  localStorage.removeItem(STORAGE_KEY);
}
