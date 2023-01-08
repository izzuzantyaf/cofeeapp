import { getCookie } from "../../../lib/cookie.helper";
import { fetchToServer } from "../../../lib/fetch-to-server.helper";
import { ApiRoute } from "../../constants";
import { HomePageDataResponse } from "./home/home-page-data-response.type";
import { MenuPageDataResponse } from "./menu/menu-page-data-response.type";

export const pageService = {
  getHomePageData: async () => {
    const response = await fetchToServer({
      path: ApiRoute.HOME,
      method: "GET",
      headers: {
        Authorization: `${getCookie("token_type")} ${getCookie(
          "access_token"
        )}`,
      },
    });
    return response as HomePageDataResponse;
  },
  getMenuPageData: async () => {
    const response = await fetchToServer({
      path: ApiRoute.MENU,
      method: "POST",
      headers: {
        Authorization: `${getCookie("token_type")} ${getCookie(
          "access_token"
        )}`,
      },
      body: {
        show_all: 1,
      },
    });
    return response as MenuPageDataResponse;
  },
};
