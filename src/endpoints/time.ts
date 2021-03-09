import { client } from "../client";
import { ExpiresIn } from "../types/expiresIn";

/**
 * Represents an endpoint for useful, PasteMyst-related time operations.
 *
 * @see https://paste.myst.rs/api-docs/time
 */
export class TimeEndpoint {
    /**
     * Converts an `expiresIn` value to a specified paste expiry time.
     *
     * @param createdAt The unix timestamp of a creation date.
     * @param expiresIn The expiry of a hypothetical paste.
     *
     * @returns The unix timestamp of the expiry.
     */
    async expiresInToUnixTimestamp(
        createdAt: number,
        expiresIn: ExpiresIn
    ): Promise<number> {
        const response = await client.get<{ result: number }>(
            `/time/expiresInToUnixTime?createdAt=${createdAt}&expiresIn=${expiresIn}`
        );

        return response ? response.result : 0;
    }
}
