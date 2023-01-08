// export const APP_NAME = "Cofeeapp" as const;

export enum Route {
  HOME = "/",
  LOGIN = "/login",
  MENU = "/menu",
}

export enum ApiRoute {
  AUTH = "/oauth/token",
  HOME = "/api/home",
  MENU = "/api/menu",
}

export enum RestrictedWhenUnauthorizedRoute {
  HOME = Route.HOME,
  MENU = Route.MENU,
}

export enum RestrictedWhenAuthorizedRoute {
  LOGIN = Route.LOGIN,
}
