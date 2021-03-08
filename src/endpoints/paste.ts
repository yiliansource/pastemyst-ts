import { client } from "../client";
import { Paste } from "../types/paste";

/**
 * Represents the collection of fields that can be passed when creating a new paste.
 * @see https://paste.myst.rs/api-docs/paste
 */
type PasteCreateFields = Partial<
    Pick<Paste, "title" | "expiresIn" | "isPrivate" | "isPublic" | "tags">
> &
    Required<Pick<Paste, "pasties">>;

/**
 * Represents the collection of fields that can be modified when editing an existing paste.
 * @see https://paste.myst.rs/api-docs/paste
 */
type PasteEditFields = Partial<
    Pick<Paste, "title" | "isPrivate" | "isPublic" | "tags" | "pasties">
>;

/**
 * Represents an endpoint for managing pastes.
 *
 * @see https://paste.myst.rs/api-docs/paste
 */
export class PasteEndpoint {
    /**
     * Fetches a paste by its ID.
     *
     * @remarks
     * Note that if you want to fetch a private paste, you need to authorize
     * the request using your personal API token.
     *
     * @param id The ID of the paste to fetch.
     * @returns The fetched paste or undefined if no paste was found.
     */
    async getPaste(id: string): Promise<Paste | undefined> {
        return client.get<Paste>(`/paste/${id}`);
    }

    /**
     * Creates a new paste using the specified fields.
     *
     * @remarks
     * Note that if you want the paste to be tied to your account, or want it
     * to be private, or want to use tags you need to authorize the request
     * using your personal API token.
     *
     * @param data The data to use to create the paste.
     * @returns The created paste or undefined if something went wrong.
     */
    async createPaste(data: PasteCreateFields): Promise<Paste | undefined> {
        return client.post<Paste>(`/paste`, data);
    }

    /**
     * Applies a set of changes to an existing paste.
     *
     * @remarks
     * Note that you can only edit pastes tied to your own account. To ensure this,
     * you need to authorize the request using your personal API token.
     *
     * Additionally, when modifying the pasties of a post, note that you need to provide
     * all of the original pasties, only making the changes you want. It is not possible
     * to update a single pasty without providing all of the original pasties.
     *
     * @param id The ID of the paste to edit.
     * @param data The data to modify in the paste.
     * @returns The modified paste or undefined if the paste was not found or something went wrong.
     */
    async editPaste(
        id: string,
        data: PasteEditFields
    ): Promise<Paste | undefined> {
        return client.patch(`/paste/${id}`, data);
    }

    /**
     * Deletes the paste with the specified ID.
     *
     * @remarks
     * Note that you can only delete pastes tied to your account. To ensure this,
     * you need to authorize the request using your personal API token. Additionally,
     * note that this action is irreversible.
     *
     * @param id The ID of the paste to delete.
     * @returns Whether the paste was successfully deleted.
     */
    async deletePaste(id: string): Promise<boolean> {
        return client.del(`/paste/${id}`);
    }
}
