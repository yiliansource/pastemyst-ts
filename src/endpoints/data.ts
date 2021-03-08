import { client } from "../client";
import { Language } from "../types/language";

/**
 * Represents an endpoint for retrieving various kinds of simple data.
 *
 * @see https://paste.myst.rs/api-docs/data
 */
export class DataEndpoint {
    /**
     * Retrieves the language definition for a specified language.
     *
     * @param name The name of the language to look up.
     * @returns The language definition or undefined if no matching language was found.
     */
    async getLanguageByName(name: string): Promise<Language | undefined> {
        return client.get(`/data/language?name=${name}`);
    }

    /**
     * Retrieves a language definition by one if its extensions.
     *
     * @param ext One of the language's extensions to look up.
     * @returns The language definition or undefined if no matching language was found.
     */
    async getLanguageByExtension(ext: string): Promise<Language | undefined> {
        return client.get(`/data/languageExt?extension=${ext}`);
    }
}
