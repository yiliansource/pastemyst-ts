/**
 * Represents a user on the PasteMyst site.
 *
 * @see https://paste.myst.rs/api-docs/user
 */
export interface User {
    /**
     * The unique ID of the user.
     */
    _id: string;
    /**
     * The full name of the user.
     */
    username: string;
    /**
     * The URL of the user's avatar.
     */
    avatarUrl: string;
    /**
     * The default language that is used for the user, when creating new pastes.
     */
    defaultLang: string;
    /**
     * Is the profile public?
     */
    publicProfile: boolean;
    /**
     * How long the user has been a supporter for, 0 if the user is not a supporter.
     */
    supporterLength: number;
    /**
     * Is the user a contributor to PasteMyst?
     */
    contributor: boolean;
}

/**
 * Represents an authorized user on the PasteMyst site.
 *
 * @see https://paste.myst.rs/api-docs/user
 */
export interface SelfUser extends User {
    /**
     * The list of paste IDs the user has starred.
     */
    stars: string[];
    /**
     * The lookup of service identifiers and user IDs the user used to create an account.
     */
    serviceIds: Record<string, string>;
}
