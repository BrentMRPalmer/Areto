export interface Question {
  id: number;
  factor: string;
  text: string;
}

export interface PersonalityResults {
  answers: Record<number, number>;
  summary: Record<string, number>;
}

export interface QuestionFormProps {
  onResults: (results: PersonalityResults) => void;
}