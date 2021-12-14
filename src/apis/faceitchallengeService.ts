/* eslint-disable */
// @ts-nocheck
import * as url from "url";

import { ApiService } from "./api";
import { isRequired } from "./api-util";

export const Api = new ApiService();

export const postsApi = (() => {
  return {
    getAllPosts(pageSize: number, page: number) {
      isRequired("pageSize", "page", "getAllPosts");

      const localVarPath = `/posts/{pageSize}/{page}`
        .replace(`{${"pageSize"}}`, encodeURIComponent(String(pageSize)))
        .replace(`{${"page"}}`, encodeURIComponent(String(page)));

      const localVarUrlObj = url.parse(localVarPath, true);

      const localVarQueryParameter = {};

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter
      );

      delete localVarUrlObj.search;

      return Api.start("get", url.format(localVarUrlObj), null, null);
    },
  };
})();

export const userApi = (() => {
  return {
    getUserById(userId: string) {
      isRequired(userId, "userId", "getUserById");

      const localVarPath = `/users/{userId}`.replace(
        `{${"userId"}}`,
        encodeURIComponent(String(userId))
      );
      const localVarUrlObj = url.parse(localVarPath, true);

      const localVarQueryParameter = {};

      localVarUrlObj.query = Object.assign(
        {},
        localVarUrlObj.query,
        localVarQueryParameter
      );

      delete localVarUrlObj.search;

      return Api.start("get", url.format(localVarUrlObj), null, null);
    },
  };
})();
