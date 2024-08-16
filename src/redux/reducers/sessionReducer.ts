import {
  ASKING_TEMPORARY_SESSION,
  TEMPORARY_SESSION,
  LOGGING_IN,
  EXISTING_SESSION,
  LOGGING_IN_ERRORS
} from '../actions/constants';

const initialState = {
  isLoadingSession: true,
  temporarySessionToken: null,
  currentUser: null,
  isSessionExisting: false,
  errors: null
};

export default function sessionReducer(state = initialState, action: any) {
  switch (action.type) {
    case ASKING_TEMPORARY_SESSION:
      return {
        ...state,
        isLoadingSession: true
      };
    case TEMPORARY_SESSION:
      return {
        ...state,
        isLoadingSession: false,
        temporarySessionToken: action.payload.temporarySessionToken
      };
    case LOGGING_IN:
      return {
        ...state,
        isLoadingSession: true,
        currentUser: null,
        isSessionExisting: false,
        errors: null
      };
    case EXISTING_SESSION:
      return {
        ...state,
        temporarySessionToken: null,
        isLoadingSession: false,
        currentUser: action.payload.currentUser,
        isSessionExisting: true
      };
    case LOGGING_IN_ERRORS:
      return {
        ...state,
        isLoadingSession: false,
        errors: action.payload.errors
      };
    default:
      return state;
  }
}