export interface ISurvey {
  id: string;
  title: string | undefined;
  description: string | undefined;
  questions?: {
    [questionId: string]: IQuestion;
  };
  draftQuestion?: IQuestion;
}

export interface IQuestion {
  _id: string,
  type: "seleccionMultiple" | "seleccionSimple" | "texto" | null;
  quiestion: string;
  active: boolean;
  options?: {
    [optionId: string]: string;
  },
}
