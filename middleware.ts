// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { jwt } from "./lib/jwt.helper";
import {
  RestrictedWhenAuthorizedRoute,
  RestrictedWhenUnauthorizedRoute,
  Route,
} from "./core/constants";
import { jose } from "./lib/jose.helper";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log("request.nextUrl.pathname: ", request.nextUrl.pathname);
  console.log("request.url: ", request.url);
  const access_token = request.cookies.get("access_token")?.value as string;
  console.log("access_token: ", access_token);

  let decodedJWT;
  try {
    decodedJWT = jose.decode(access_token);
  } catch (error) {
    console.error(error);
  }
  console.log("decodedJWT: ", decodedJWT);

  if (
    Object.values(RestrictedWhenUnauthorizedRoute).includes(
      request.nextUrl.pathname as unknown as RestrictedWhenUnauthorizedRoute
    ) &&
    !decodedJWT
  ) {
    return NextResponse.redirect(new URL(Route.LOGIN, request.url));
  }
  if (
    Object.values(RestrictedWhenAuthorizedRoute).includes(
      request.nextUrl.pathname as unknown as RestrictedWhenAuthorizedRoute
    ) &&
    decodedJWT
  ) {
    return NextResponse.redirect(new URL(Route.HOME, request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
