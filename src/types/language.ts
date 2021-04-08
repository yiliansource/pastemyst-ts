/**
 * Represents a (programming) language that is usable on PasteMyst.
 *
 * @see https://paste.myst.rs/api-docs/data
 */
export interface Language {
    /**
     * The full name of the language.
     */
    name: string;
    /**
     * The language mode to be used in the editor.
     */
    mode: string;
    /**
     * The mimes associated with the language.
     */
    mimes: Array<string>;
    /**
     * The extensions used by the language.
     */
    ext?: Array<string>;
    /**
     * The colour representing the language.
     */
    color?: string;
}
