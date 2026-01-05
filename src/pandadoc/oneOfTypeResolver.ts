/**
 * PandaDoc runtime helpers for generated polymorphic models.
 *
 * Goal: keep generator-template / postgenerate patches tiny, and put real logic here in TypeScript.
 */

/**
 * `DocumentCreateRequest` is generated as a oneOf `type` union, but the generator may map
 * `typeMap["DocumentCreateRequest"]` to a stub class without `getAttributeTypeMap()`.
 *
 * We resolve the concrete oneOf type based on the request payload shape.
 */
export function resolveTypeForAttributeMap(type: string, data: any): string {
    if (type !== "DocumentCreateRequest") return type;
    if (!data || typeof data !== "object") return type;

    if ((data as any).templateUuid !== undefined) return "DocumentCreateRequestOneOf";
    if ((data as any).url !== undefined) return "DocumentCreateRequestOneOf1";

    return type;
}


