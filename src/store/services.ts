import { Platform } from "react-native";
import { Api, postsApi } from "../apis";
import store from "./storeConfig";

import endpoint from "../common/endpoint";

const BASE_PATH = endpoint.API_URL;
// @ts-ignore
let nativeHeaders;

export const initNativeHeader = () => {
  nativeHeaders = {
    "X-PLATFORM": Platform.OS,
    "X-SYSTEM-VERSION": Platform.Version,
  };
};

export const headers = (accept: string, acceptLanguage: string) => ({
  Accept: accept,
  "Content-Type": "application/json",
  "Accept-Language": acceptLanguage,
});

// @ts-ignore
Promise.resolve().then(() => {
  store.subscribe(() => {
    Api.setHeaders(headers("application/json", "en"));
  });
});

Api.setBaseUrl(BASE_PATH);
Api.setHeaders(headers("application/json", ""));

export const PostsApi = postsApi;
