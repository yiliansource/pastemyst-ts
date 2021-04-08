/**
 * Represents a pasty, which is an individual file in a larger paste object.
 *
 * @see https://paste.myst.rs/api-docs/objects
 */
export interface Pasty {
    /**
     * The ID of the pasty.
     */
    _id: string;
    /**
     * The language of the pasty.
     */
    language: string;
    /**
     * The title of the pasty.
     */
    title: string;
    /**
     * The contents of the pasty.
     */
    code: string;
}
