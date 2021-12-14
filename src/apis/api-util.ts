/* eslint-disable */

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
  name: string = "RequiredError";
  constructor(public field: string, msg?: string) {
    super(msg);
  }
}

/**
 * @summary is Success Code
 * @param {} statusCode
 * @export
 */
export const isSuccessCode = (statusCode: number) => {
  return statusCode >= 200 && statusCode < 300;
};

/**
 * @summary ECredentials
 */
export enum ECredentials {
  OMIT = "omit",
  SAME_ORIGIN = "same-origin",
  INCLUDE = "include",
}

/**
 * @summary is required property
 */
export const isRequired = (
  value: any,
  propertyName: string,
  endpointName: string
) => {
  if (value === null || value === undefined) {
    throw new RequiredError(
      propertyName,
      `Required parameter ${propertyName} was null or undefined when calling ${endpointName}.`
    );
  }
};
