import { removeCookie } from "../../../lib/cookie.helper";
import { fetchToServer } from "../../../lib/fetch-to-server.helper";
import { ApiRoute } from "../../constants";
import { AuthResponse } from "./auth-response.type";

export const authService = {
  login: async (username: string, password: string) => {
    const response = (await fetchToServer({
      path: ApiRoute.AUTH,
      method: "POST",
      body: {
        username: username,
        password: password,
        grant_type: "password",
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      },
    })) as AuthResponse;
    return response;
  },
  logout: () => {
    removeCookie("access_token");
    removeCookie("refresh_token");
    removeCookie("token_type");
    removeCookie("expires_in");
    location.reload();
  },
};
