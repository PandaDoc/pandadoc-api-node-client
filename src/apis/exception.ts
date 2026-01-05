/**
 * Represents an error caused by an api call i.e. it has attributes for a HTTP status code
 * and the returned body object.
 *
 * Example
 * API returns a ErrorMessageObject whenever HTTP status code is not in [200, 299]
 * => ApiException(404, someErrorMessageObject)
 *
 */
export class ApiException<T> extends Error {
    /**
     * @param rawBody Raw response body string (when available). Useful when the OpenAPI schema does not model the error payload.
     * @param rawBodyParsed Best-effort parsed representation of rawBody (e.g. JSON object) when available.
     */
    public constructor(
        public code: number,
        message: string,
        public body: T,
        public headers: { [key: string]: string; },
        public rawBody?: string,
        public rawBodyParsed?: any,
    ) {
        super("HTTP-Code: " + code + "\nMessage: " + message + "\nBody: " + JSON.stringify(body) + "\nHeaders: " +
        JSON.stringify(headers));
    }
}

