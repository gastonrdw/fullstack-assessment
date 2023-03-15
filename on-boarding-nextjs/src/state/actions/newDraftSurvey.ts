import {ISurvey} from '@/interfaces/survey';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

const fetchNewDraftSurveySuccess = () =>
  ({
    type: 'FETCH_NEW_DRAFT_SURVEY_SUCCESS',
  } as const);

const fetchUpdateDraftSurveySuccess = (type: string, value: string) =>
  ({
    type: 'FETCH_UPDATE_DRAFT_SURVEY_SUCCESS',
    payload: {type, value}
  } as const);

const fetchNewDraftSurveyFailure = (error: any) => {
  return {
    type: 'FETCH_SURVEY_FAILURE',
    error
  } as const;
};

export const newDraftSurvey: any = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(fetchNewDraftSurveySuccess());
    } catch (error: any) {
        dispatch(fetchNewDraftSurveyFailure(error));
    };
};

export const updateDraftSurvey: any = (type: string, value: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(fetchUpdateDraftSurveySuccess(type, value));
    } catch (error: any) {
        dispatch(fetchNewDraftSurveyFailure(error));
    };
};

export type Actions =
  | ReturnType<typeof fetchNewDraftSurveySuccess>
  | ReturnType<typeof fetchNewDraftSurveyFailure>
  | ReturnType<typeof fetchUpdateDraftSurveySuccess>;
