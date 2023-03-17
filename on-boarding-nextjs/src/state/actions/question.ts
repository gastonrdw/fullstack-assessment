import { Dispatch } from 'react';
import { AnyAction } from 'redux';

const fetchAddDraftQuestionSuccess = () =>
  ({
    type: 'FETCH_ADD_DRAFT_QUESTION_SUCCESS',
  } as const);

const fetchUpdateDraftQuestionTypeSuccess = (payload: "seleccionMultiple" | "seleccionSimple" | "texto" | null) =>
  ({
    type: 'FETCH_UPDATE_DRAFT_QUESTION_TYPE_SUCCESS',
    payload
  } as const);

const fetchAddQuestionSuccess = () =>
  ({
    type: 'FETCH_ADD_QUESTION_SUCCESS',
  } as const);

const fetchSetSurveyToShowFailure = (error: any) => {
  return {
    type: 'FETCH_SURVEY_FAILURE',
    error
  } as const;
};



export const addDraftQuestion: any = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(fetchAddDraftQuestionSuccess());

    } catch (error: any) {
        dispatch(fetchSetSurveyToShowFailure(error));
    };
};

export const updateDraftQuestionType: any = (type: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(fetchUpdateDraftQuestionTypeSuccess(type as "seleccionMultiple" | "seleccionSimple" | "texto" | null));

    } catch (error: any) {
        dispatch(fetchSetSurveyToShowFailure(error));
    };
};

export const addQuestion: any = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(fetchAddQuestionSuccess());

    } catch (error: any) {
        dispatch(fetchSetSurveyToShowFailure(error));
    };
};

export type Actions =
  | ReturnType<typeof fetchAddDraftQuestionSuccess>
  | ReturnType<typeof fetchUpdateDraftQuestionTypeSuccess>
  | ReturnType<typeof fetchSetSurveyToShowFailure>
  | ReturnType<typeof fetchAddQuestionSuccess>;
