import {
  ASKING_TEMPORARY_SESSION,
  TEMPORARY_SESSION,
  LOGGING_IN,
  EXISTING_SESSION,
  LOGGING_IN_ERRORS
} from './constants';

export const askTemporarySession = () => {
  return {
    type: ASKING_TEMPORARY_SESSION
  };
};

export const setTemporarySessionToken = (temporarySessionToken: string) => {
  return {
    type: TEMPORARY_SESSION,
    payload: {
      temporarySessionToken
    }
  };
}