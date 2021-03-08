import { EditType } from "./editType";

/**
 * Represents an edit to a paste object.
 *
 * @see https://paste.myst.rs/api-docs/objects
 */
export interface Edit {
    /**
     * The unique ID of the edit.
     */
    _id: string;
    /**
     * The sequential ID of the edit. Note that multiple edits can share the same id,
     * indicating that multiple fields were changed simultaneously.
     */
    editId: string;
    /**
     * The type the edit.
     */
    editType: EditType;
    /**
     * Internally used metadata, mainly used to determine which pasty was edited.
     */
    metadata: Array<string>;
    /**
     * The actual paste edit, storing old data before the edit. New data is stored
     * in the actual paste object.
     */
    edit: string;
    /**
     * The unix timestamp of when the edit was made at.
     */
    editedAt: number;
}

/**
 * Represents the type of a paste edit.
 *
 * @see https://paste.myst.rs/api-docs/objects
 */
export enum EditType {
    title = 0,
    pastyTitle = 1,
    pastyLanguage = 2,
    pastyContent = 3,
    pastyAdded = 4,
    pastyRemoved = 5,
}
