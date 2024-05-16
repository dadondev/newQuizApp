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
}

export interface ISingleQuiz {
  id: string;
  question: string;
  trueAnswer: string;
  variants: object;
}
