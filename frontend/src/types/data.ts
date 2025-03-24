export type Class = {
  _id: string;
  code: string;
  institution: string;
  name: string;
};

export type Section = {
  _id: string;
  code: string;
  course: string;
  numStudents: number;
  professor: string;
  term: string;
};
