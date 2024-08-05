import { CallSignupParams, CallLoginParams } from "./types";

export const callSignup = async (
  {
    username,
    email,
    password,
    confirmPassword,
    temporarySessionToken
  }: CallSignupParams
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URI}/signup`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${temporarySessionToken}`
      },
      body: JSON.stringify({
        user: {
          email,
          password,
          confirm_password: confirmPassword,
          username
        }
      }),
      credentials: 'include',
    },
  )

  return response;
}

export const callLogin = async (
  {
    email,
    password,
    temporarySessionToken
  }: CallLoginParams
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URI}/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${temporarySessionToken}`
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    },
  )

  return response;
}

export const callTemporarySessionToken = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URI}/api/v1/temporary-session`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    }
  )

  return response;
}

export const callLogout = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URI}/logout`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/jon',
      },
      credentials: 'include',
    }
  );

  return response;
}

export const callCurrentUser = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URI}/api/v1/current_user`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    }
  )

  return response;
}