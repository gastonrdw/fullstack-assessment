import { combineReducers } from 'redux';
import { reducer as Surveys,
    State as SurveyState } from './reducers/survey';

export type RootState = {
  Surveys: SurveyState;
}

export const rootReducer = combineReducers<RootState>({
  Surveys
});
