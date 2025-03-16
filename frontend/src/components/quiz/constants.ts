import { Question } from "./types";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    factor: "Openness",
    text: "I enjoy trying new things.",
  },
  {
    id: 2,
    factor: "Conscientiousness",
    text: "I like to have a to-do list and work through it systematically.",
  },
  {
    id: 3,
    factor: "Extraversion",
    text: "I am talkative around new people.",
  },
  {
    id: 4,
    factor: "Agreeableness",
    text: "I tend to be trusting of others.",
  },
  {
    id: 5,
    factor: "Neuroticism",
    text: "I get stressed out easily.",
  }
];

export const RATING_SCALE = [1, 2, 3, 4, 5];