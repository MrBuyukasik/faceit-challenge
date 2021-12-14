import axios, { Method } from "axios";
import { isSuccessCode, ECredentials } from "./api-util";

type IBody = object | string | null;

interface IConfiguration {
  method: string;
  headers: object;
  credentials: ECredentials;
  data?: IBody;
}

export class ApiService {
  private headers = {};
  private baseUrl = "";
  private credentials: ECredentials = ECredentials.SAME_ORIGIN;

  public setHeaders(headers: object, isOverride?: boolean) {
    if (isOverride) {
      this.headers = headers;
    } else {
      this.headers = { ...this.headers, ...headers };
    }
  }

  public setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public setCredentials(credentials: ECredentials) {
    this.credentials = credentials;
  }

  public getHeaders(): any {
    return this.headers;
  }

  public start(
    method: string,
    url: string,
    body: IBody | null,
    customConfiguration: IConfiguration | null
  ) {
    // eslint-disable-next-line no-param-reassign
    customConfiguration = customConfiguration || null;

    const requestHeader = this.getHeaders();

    this.setHeaders(requestHeader);

    return new Promise((resolve, reject) => {
      axios({
        method: method as Method,
        baseURL: this.baseUrl,
        url,
        withCredentials: true,
        headers: this.getHeaders(),
        data: body,
      })
        .then((response) => {
          if (isSuccessCode(response.status)) {
            return resolve(response.data);
          }

          return reject({
            error: {
              message: "general_errors_technicalError_errorMessage",
              ...response.data,
            },
          });
        })
        .catch((error) => {
          return reject({
            // eslint-disable-next-line no-nested-ternary
            error: error?.response?.data
              ? {
                  message:
                    error.response.data?.message ||
                    "general_errors_technicalError_errorMessage",
                  ...error.response,
                  ...error.response.data,
                  url,
                }
              : error?.message && error?.code // without network error
              ? {
                  message:
                    error.message ||
                    "general_errors_technicalError_errorMessage",
                  ...error,
                }
              : {
                  message:
                    "general_components_internetConnectionProblem_errorMessage",
                },
          });
        });
    });
  }
}
