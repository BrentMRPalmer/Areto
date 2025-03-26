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

export type Pool = {
  _id: string;
  name: string;
  numStudents: number;
  course: string;
  section: string;
};
