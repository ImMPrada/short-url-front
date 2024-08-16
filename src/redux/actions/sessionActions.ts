import {
  ASKING_TEMPORARY_SESSION,
  TEMPORARY_SESSION,
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