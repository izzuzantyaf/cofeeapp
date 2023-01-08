import { Route } from "../core/constants";

export const redirector = {
  to: (route: Route) => {
    location.href = location.origin + route;
  },
  toHomePage: () => {
    location.href = location.origin + Route.HOME;
  },
  toLoginPage: () => {
    location.href = location.origin + Route.LOGIN;
  },
  toMenuPage: () => {
    location.href = location.origin + Route.MENU;
  },
};
