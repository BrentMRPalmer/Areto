export const DEFAULT_PFP = "https://ui-avatars.com/api/?name=Jason+Wei&size=80";

// Skills dummy for now - will be replaced with actual data
export const ALL_SKILLS = [
  "Algorithms",
  "Public Speaking",
  "Operating Systems",
  "UI/UX Design",
  "React",
  "TypeScript",
  "Backend Development",
];

// Convert skills to options for Select component
export const allSkillOptions = ALL_SKILLS.map((skill) => ({
  value: skill,
  label: skill,
}));