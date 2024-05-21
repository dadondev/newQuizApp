export interface IAuthPage {
  toast: any;
  setAuthType: (a: "login" | "register") => void;
}
export interface IIconBtn {
  url: string;
  onClick?: () => void;
  w: number | string;
  h: number | string;
  className?: string;
}

export interface IQuizCard {
  howMuch: number;
  name: string; 
  id: string;
}

export interface IQuiz {
  id: string;
  name: string;
  quizs: ISingleQuiz[];
  results: userResult[];
}

export interface ISingleQuiz {
  id: string;
  question: string;
  trueAnswer: string;
  variants: object;
}

export interface ISingleRes {
  userAnswer: string;
  trueAnswer: string;
  equal: boolean;
}

export interface userResult {
  name: string;
  results: ISingleRes[];
}

export interface quizContainer {
  id: string;
  name: string;
  quizs: ISingleQuiz[];
  results: userResult[];
  time: string;
}
