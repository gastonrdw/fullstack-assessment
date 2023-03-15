import { RootActions } from '../combineActions';
import { ISurvey } from '../../interfaces/survey';

export type State = {
  surveys:{
    surveys: ISurvey[],
    isFetching: boolean;
  };
  draftSurvey: {
    draftSurvey: ISurvey;
    active: boolean;
  }
  surveyToShow: {
    surveyToShow: ISurvey | null;
    isFetching: boolean;
  };
  error: any | null;
};

export const initialState: State = {
  surveys: {
    surveys: [],
    isFetching: false,
  },
  draftSurvey: {
    draftSurvey: {
      id: '',
      title: '',
      description: ''
    },
    active: false,
  },
  surveyToShow: {
    surveyToShow: null,
    isFetching: false,
  },
  error: null,
};

export function reducer(state: State = initialState, action: RootActions): State {
  switch (action.type) {
    case 'FETCH_SURVEY_SUCCESS':
      return {
        ...state,
        surveys: {
          surveys: action.payload,
          isFetching: false,
        },
        error: null
      };
    case 'FETCH_SURVEY_FAILURE':
      return {
        ...state,
        surveys: {
          ...state.surveys,
          isFetching: false,
        },
        error: action.error
      };
    case 'FETCH_SET_SURVEY_TO_SHOW_REQUEST':
      return {
        ...state,
        surveyToShow: {
          ...state.surveyToShow,
          isFetching: true,
        },
      };
    case 'FETCH_SET_SURVEY_TO_SHOW_SUCCESS':
      return {
        ...state,
        surveyToShow: {
          surveyToShow: state.surveys.surveys && state.surveys.surveys.filter(item => item.id === action.payload)[0],
          isFetching: false,
        },
        error: null
      };
    case 'FETCH_NEW_DRAFT_SURVEY_SUCCESS':
      return {
        ...state,
        draftSurvey: {
          draftSurvey: {
            id: '',
            title: '',
            description: ''
          },
          active: true,
        },
        error: null
      };
    case 'FETCH_UPDATE_DRAFT_SURVEY_SUCCESS':
      return {
        ...state,
        draftSurvey: {
          ...state.draftSurvey,
          draftSurvey: {...state.draftSurvey.draftSurvey, [action.payload.type]: action.payload.value},
        },
        error: null
      };
    case 'FETCH_CREATE_SURVEY_SUCCESS':
      return {
        ...state,
        surveys: {
          surveys: [...state.surveys.surveys, state.draftSurvey.draftSurvey],
          isFetching: false,
        },
        draftSurvey: {
          draftSurvey: {
            id: '',
            title: '',
            description: ''
          },
          active: false,
        },
        error: null
      };
    case 'FETCH_CLEAN_DRAFT_SURVEY_SUCCESS':
      return {
        ...state,
        draftSurvey: {
          draftSurvey: {
            id: '',
            title: '',
            description: ''
          },
          active: false,
        },
        error: null
      };
    default:
      return state;
  }
}
