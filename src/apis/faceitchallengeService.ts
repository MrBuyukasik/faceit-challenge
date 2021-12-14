/* eslint-disable */
// @ts-nocheck
import * as url from "url";

import { ApiService } from "./api";
import { isRequired } from "./api-util";

export const Api = new ApiService();

export const postsApi = (() => {
  return {
    getAllPosts() {
      const localVarPath = `/posts`;
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
