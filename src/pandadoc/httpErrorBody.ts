import { ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";

export type RawBodyAndParsed = {
    rawBody: string;
    rawBodyParsed: any;
};

/**
 * Best-effort parse of an HTTP response body as "any", using the generator's ObjectSerializer.
 * Falls back to returning the raw string when parsing fails.
 */
export function tryParseRawBody(rawBody: string, contentType: string | undefined): any {
    if (!contentType) return rawBody;
    try {
        return ObjectSerializer.parse(rawBody, contentType);
    } catch (_e) {
        return rawBody;
    }
}

/**
 * Reads a response body as text exactly once, and returns both raw and parsed forms.
 *
 * Intended for error handling, where the OpenAPI schema may not model the real error payload.
 */
export async function readRawBodyAndParse(
    response: ResponseContext,
    contentType: string | undefined
): Promise<RawBodyAndParsed> {
    const rawBody = await response.body.text();
    const rawBodyParsed = tryParseRawBody(rawBody, contentType);
    return { rawBody, rawBodyParsed };
}


