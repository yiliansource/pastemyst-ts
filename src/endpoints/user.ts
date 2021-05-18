import { client } from "../client";
import { SelfUser, User } from "../types/user";

/**
 * Represents the endpoint for getting users.
 *
 * @see https://paste.myst.rs/api-docs/user
 */
export class UserEndpoint {
    /**
     * Checks if a user with the specified name exists.
     *
     * @param username The name to check.
     */
    async userExists(username: string): Promise<boolean> {
        const response = await client.makeRequest(
            `/user/${username}/exists`,
            "GET"
        );
        return response.status === 200;
    }

    /**
     * Retrieves a user by their name. Returns undefined if no user can be found.
     *
     * @remarks
     * Note that users with private profiles are hidden from the public API,
     * and will therefore also return undefined.
     *
     * @param username The name to fetch.
     */
    async getUser(username: string): Promise<User | undefined> {
        return client.get(`/user/${username}`);
    }

    /**
     * Retrieves the current user, identified by the provided authorization token.
     *
     * @remarks
     * Note that this method will throw an error if no authorization
     * token was previously provided.
     */
    async getCurrentUser(): Promise<SelfUser | undefined> {
        if (!client.isAuthorized()) {
            throw new Error(
                "An authorization token must be provided to fetch the current user."
            );
        }

        return client.get(`/user/self`);
    }

    /**
     * Retrieves the paste IDs of the current user, which is identified
     * by the provided authorization token.
     *
     * @remarks
     * Note that this method will throw an error if no authorization
     * token was previously provided.
     */
    async getOwnPasteIDs(): Promise<string[]> {
        if (!client.isAuthorized()) {
            throw new Error(
                "An authorization token must be provided to fetch own pastes."
            );
        }

        return (await client.get(`/user/self/pastes`)) || [];
    }
}
