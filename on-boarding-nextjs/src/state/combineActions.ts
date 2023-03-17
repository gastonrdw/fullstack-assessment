import { Actions as SetSurveyToShow } from './actions/setSurveyToShow';
import { Actions as NewDraftSurvey } from './actions/newDraftSurvey';
import { Actions as Question } from './actions/question';

export type RootActions =
| SetSurveyToShow
| NewDraftSurvey
| Question
