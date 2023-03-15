import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ISurvey } from '../../interfaces/survey';

const fetchSurveysSuccess = (payload: ISurvey[]) =>
  ({
    type: 'FETCH_SURVEY_SUCCESS',
    payload
  } as const);

const fetchSurveysFailure = (error: any) => {
  return {
    type: 'FETCH_SURVEY_FAILURE',
    error
  } as const;
};



export const getSurveys: any = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const data: ISurvey[] = [{id: "1",title: "Pedrito", description: "Descripcion del curso"}];
        dispatch(fetchSurveysSuccess(data));

    } catch (error: any) {
        dispatch(fetchSurveysFailure(error));
    };
};

export type Actions =
  | ReturnType<typeof fetchSurveysSuccess>
  | ReturnType<typeof fetchSurveysFailure>;
