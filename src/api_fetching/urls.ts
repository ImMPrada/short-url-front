import { CreateUrlParams, GetAllUrlsParams } from "./types";

export const getAllUrls = async ({ temporarySessionToken }: GetAllUrlsParams) => {
  let response;
  if (temporarySessionToken) {
    response = await fetch(
      `${import.meta.env.VITE_API_URI}/api/v1/registered-urls.json`,
      {
        headers: {
          'Content-Type': 'applicationn/json',
          'Authorization': `Token ${temporarySessionToken}`
        }
      }
    );

    return response;
  };

  response = await fetch(
    `${import.meta.env.VITE_API_URI}/api/v1/registered-urls.json`,
    {
      headers: {
        'Content-Type': 'applicationn/json'
      },
      credentials: 'include'
    }
  );

  return response;
};

export const createUrl = async ({ temporarySessionToken, urlToSubmit }: CreateUrlParams) => {
  let response;

  if (temporarySessionToken) {
    response = await fetch(
      `${import.meta.env.VITE_API_URI}/api/v1/registered-urls.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${temporarySessionToken}`
        },
        body: JSON.stringify({
          registered_url: {
            url: urlToSubmit
          }
        })
      }
    );

    return response;
  }

  response = await fetch(
    `${import.meta.env.VITE_API_URI}/api/v1/registered-urls.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        registered_url: {
          url: urlToSubmit
        }
      }),
      credentials: 'include'
    }
  );

  return response;
};
