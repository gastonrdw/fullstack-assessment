import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ISurvey } from '../../interfaces/survey';

const fetchSetSurveyToShowRequest = () =>
  ({
    type: 'FETCH_SET_SURVEY_TO_SHOW_REQUEST'
  } as const);

const fetchSetSurveyToShowSuccess = (payload: string) =>
  ({
    type: 'FETCH_SET_SURVEY_TO_SHOW_SUCCESS',
    payload
  } as const);

const fetchSetSurveyToShowFailure = (error: any) => {
  return {
    type: 'FETCH_SURVEY_FAILURE',
    error
  } as const;
};



export const setSurveyToShow: any = (id: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(fetchSetSurveyToShowRequest());
        dispatch(fetchSetSurveyToShowSuccess(id));

    } catch (error: any) {
        dispatch(fetchSetSurveyToShowFailure(error));
    };
};

export type Actions =
  | ReturnType<typeof fetchSetSurveyToShowRequest>
  | ReturnType<typeof fetchSetSurveyToShowSuccess>
  | ReturnType<typeof fetchSetSurveyToShowFailure>;
