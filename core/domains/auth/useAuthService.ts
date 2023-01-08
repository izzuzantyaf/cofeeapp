import { useState } from "react";
import { AuthResponse } from "./auth-response.type";
import { setAccessTokenToCookie, setCookie } from "../../../lib/cookie.helper";
import { jwt } from "../../../lib/jwt.helper";

export function useAuthService() {
  const [authResponse, setAuthResponse] = useState<AuthResponse>();

  if (authResponse) {
    if (authResponse satisfies AuthResponse) {
      const { access_token } = authResponse;
      const payload = jwt.decode(access_token) as Record<
        string,
        string | number
      >;
      const expires_in_miliseconds = (payload.exp as number) * 1000;
      for (const [key, value] of Object.entries(authResponse)) {
        setCookie(key, value as string, {
          expires: expires_in_miliseconds,
        });
      }
      console.log("Login success");
    } else {
      console.error("Login error", authResponse);
    }
  }

  return [authResponse, () => setAuthResponse];
}
