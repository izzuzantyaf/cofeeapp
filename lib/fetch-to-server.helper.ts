import { ApiRoute } from "../core/constants";

export async function fetchToServer(
  props: {
    path: "" | ApiRoute;
    method?: string;
    body?: Record<string, any>;
    headers?: Record<string, any>;
  } = {
    path: "",
    method: "GET",
    body: {},
    headers: {},
  }
) {
  const { path, method, body, headers } = props;
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASEURL + path, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    method: method,
    body: JSON.stringify(body),
  });
  const responseJson = await response.json();
  console.log("Response : ", responseJson);
  return responseJson;
}
