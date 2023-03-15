import { Actions as GetSurveysActions } from './actions/getSurveys';
import { Actions as SetSurveyToShow } from './actions/setSurveyToShow';
import { Actions as NewDraftSurvey } from './actions/newDraftSurvey';

export type RootActions =
| GetSurveysActions
| SetSurveyToShow
| NewDraftSurvey
