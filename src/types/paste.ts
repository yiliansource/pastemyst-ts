import { Edit } from "./edit";
import { ExpiresIn } from "./expiresIn";
import { Pasty } from "./pasty";

/**
 * Represents a paste object on the site.
 *
 * @remarks
 * Note that a single paste may contain multiple "pasties", which are
 * smaller, contained files, each with their own content and language.
 *
 * @see https://paste.myst.rs/api-docs/objects
 */
export interface Paste {
    /**
     * The unique ID of the paste.
     */
    _id: string;
    /**
     * The ID of the owner. If the paste does not have an owner, this is set to "".
     */
    ownerId: string;
    /**
     * The title of the paste.
     */
    title: string;
    /**
     * The unix timestamp of when the paste was created.
     */
    createdAt: number;
    /**
     * When the paste will expire.
     */
    expiresIn: ExpiresIn;
    /**
     * The unix timestamp of when the paste will be deleted.
     * If it does not have an expiry date, this is set to 0.
     */
    deletesAt: number;
    /**
     * The number of the stars that the paste has received.
     */
    stars: number;
    /**
     * Is the paste only accessible by the owner?
     */
    isPrivate: boolean;
    /**
     * Is the paste displayed publicly on the owner's profile?
     */
    isPublic: boolean;
    /**
     * The tags of the paste.
     */
    tags: Array<string>;
    /**
     * The pasties contained within the paste. This array can not be empty.
     */
    pasties: Array<Pasty>;
    /**
     * The edits that were made to the paste.
     */
    edits: Array<Edit>;
}
