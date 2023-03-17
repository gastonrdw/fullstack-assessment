import { RootActions } from '../combineActions';
import { ISurvey } from '../../interfaces/survey';
import { v4 as uuidv4 } from 'uuid';
import Question from '@/components/question';

export type State = {
  surveys:{
    surveys: ISurvey[],
  };
  draftSurvey: {
    draftSurvey: ISurvey;
    active: boolean;
  }
  surveyToShow: {
    surveyToShow: ISurvey | null;
  };
  error: any | null;
};

export const initialState: State = {
  surveys: {
    surveys: [],
  },
  draftSurvey: {
    draftSurvey: {
      id: '',
      title: '',
      description: '',
      questions: [],
    },
    active: false,
  },
  surveyToShow: {
    surveyToShow: null,
  },
  error: null,
};

export function reducer(state: State = initialState, action: RootActions): State {
  switch (action.type) {
    case 'FETCH_SURVEY_FAILURE':
      return {
        ...state,
        surveys: {
          ...state.surveys,
        },
        error: action.error
      };
    case 'FETCH_SET_SURVEY_TO_SHOW_REQUEST':
      return {
        ...state,
        surveyToShow: {
          ...state.surveyToShow,
        },
      };
    case 'FETCH_SET_SURVEY_TO_SHOW_SUCCESS':
      return {
        ...state,
        surveyToShow: {
          surveyToShow: state.surveys.surveys && state.surveys.surveys.filter(item => item.id === action.payload)[0],
        },
        error: null
      };
    case 'FETCH_NEW_DRAFT_SURVEY_SUCCESS':
      return {
        ...state,
        draftSurvey: {
          draftSurvey: {
            id: uuidv4(),
            title: '',
            description: '',
            questions: [],
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
        },
        draftSurvey: {
          draftSurvey: {
            id: '',
            title: '',
            description: '',
            questions: [],
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
            description: '',
            questions: [],
          },
          active: false,
        },
        error: null
      };
    case 'FETCH_ADD_DRAFT_QUESTION_SUCCESS':
      return {
        ...state,
        draftSurvey: {
          ...state.draftSurvey,
          draftSurvey: {
            ...state.draftSurvey.draftSurvey,
            draftQuestion: {
                _id: uuidv4(),
                type: null,
                quiestion: '',
                active: true,
                // options: {
                //   ["123"]: "preg1",
                // }
            }
          },
        },
      };
    case 'FETCH_UPDATE_DRAFT_QUESTION_TYPE_SUCCESS':
       if (state.draftSurvey.draftSurvey.draftQuestion){
        return {
          ...state,
          draftSurvey: {
            ...state.draftSurvey,
            draftSurvey: {
              ...state.draftSurvey.draftSurvey,
              draftQuestion: {
                  ...state.draftSurvey.draftSurvey.draftQuestion,
                  type: action.payload,
              }
            },
          },
        };
      } else return state;
     case 'FETCH_UPDATE_DRAFT_QUESTION_SUCCESS':
       if (state.draftSurvey.draftSurvey.draftQuestion){
        return {
          ...state,
          draftSurvey: {
            ...state.draftSurvey,
            draftSurvey: {
              ...state.draftSurvey.draftSurvey,
              draftQuestion: {
                  ...state.draftSurvey.draftSurvey.draftQuestion,
                  quiestion: action.payload,
              }
            },
          },
        };
      } else return state;
    case 'FETCH_ADD_QUESTION_SUCCESS':
      if (state.draftSurvey.draftSurvey.draftQuestion){
        return {
        ...state,
        draftSurvey: {
          ...state.draftSurvey,
          draftSurvey: {
            ...state.draftSurvey.draftSurvey,
            questions: [...state.draftSurvey.draftSurvey.questions, state.draftSurvey.draftSurvey.draftQuestion],
            draftQuestion: {
                _id: '',
                type: null,
                quiestion: '',
                active: false
            }
          },
        },
      };
      } else
      return state;

    default:
      return state;
  }
}
