import { useState } from "react";
import { AuthResponse } from "./auth-response.type";
import { setAccessTokenToCookie, setCookie } from "../../../lib/cookie.helper";
import { jwt } from "../../../lib/jwt.helper";
import { authService } from "./auth.service";

export function useAuthService() {
  const [authResponse, setAuthResponse] = useState<AuthResponse>();

  async function login(credentials: { username: string; password: string }) {
    const response = await authService.login(
      credentials.username,
      credentials.password
    );
    setAuthResponse(response);
  }

  if (authResponse) {
    if (authResponse.hasOwnProperty("access_token")) {
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
      location.reload();
    } else {
      console.error("Login error", authResponse);
    }
  }

  return { authResponse, login };
}
