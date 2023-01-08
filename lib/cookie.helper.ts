/**
 *
 * @param param0 {
 * key: string;
 * value: string;
 * expires: number (UNIX epoch time in milliseconds);
 * path: string;
 * }
 */
export const setCookie = (
  key: string,
  value: string,
  {
    expires,
    path = "/",
  }: {
    expires?: number;
    path?: string;
  }
) => {
  document.cookie = `${key}=${value}; expires=${new Date(
    expires ?? 0
  ).toUTCString()}; path=${path}`;
};

export const getCookie = (key: string) => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.split("=");
    if (cookieKey.trim() === key) {
      return cookieValue;
    }
  }
  return null;
};

export const removeCookie = (key: string, path: string = "/") => {
  document.cookie = `${key}=; expires=${new Date(
    0
  ).toUTCString()}; path=${path}`;
};

export const setAccessTokenToCookie = (
  accessToken: string,
  {
    expires,
  }: {
    expires?: number;
  }
) => {
  setCookie("access_token", accessToken, {
    expires,
  });
};

export const removeAccessTokenFromCookie = () => {
  removeCookie("access_token");
};
