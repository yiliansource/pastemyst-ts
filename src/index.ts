import { client } from "./client";

import { DataEndpoint } from "./endpoints/data";
import { PasteEndpoint } from "./endpoints/paste";
import { TimeEndpoint } from "./endpoints/time";
import { UserEndpoint } from "./endpoints/user";

export const data = new DataEndpoint();
export const time = new TimeEndpoint();
export const pastes = new PasteEndpoint();
export const users = new UserEndpoint();

export * from "./types/edit";
export * from "./types/expiresIn";
export * from "./types/language";
export * from "./types/paste";
export * from "./types/pasty";
export * from "./types/user";

/**
 * Provides an API token to the library, used to authorize private requests.
 *
 * @param token The token to authorize with, taken from the profile settings.
 */
export function authorize(token: string): void {
    client.token = token;
}
