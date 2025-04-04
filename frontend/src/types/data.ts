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
  student: string[];
};

export type Student = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  institution: string;
  enrolledCourses: string[];
  gpa?: number;
  extraversion?: number;
  emotionality?: number;
  agreeableness?: number;
  conscientuous?: number;
  compatabilityScore?: number;
};
