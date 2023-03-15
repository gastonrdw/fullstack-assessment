import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ISurvey } from '../../interfaces/survey';

const fetchSurveysRequest = () =>
  ({
    type: 'FETCH_SURVEY_REQUEST'
  } as const);

const fetchSurveysSuccess = (payload: ISurvey[] | null) =>
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
        dispatch(fetchSurveysRequest());
        const data: ISurvey[] = [{id: "1",title: "Pedrito", description: "Descripcion del curso"}];
        dispatch(fetchSurveysSuccess(data.length > 0 ? data : null));

    } catch (error: any) {
        dispatch(fetchSurveysFailure(error));
    };
};

export type Actions =
  | ReturnType<typeof fetchSurveysRequest>
  | ReturnType<typeof fetchSurveysSuccess>
  | ReturnType<typeof fetchSurveysFailure>;
