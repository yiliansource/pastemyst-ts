import { assert } from "chai";

import { data } from "./pastemyst";

describe("Data", function () {
    it("gets languages by name", async function () {
        const unknownNames: string[] = ["does not exist", "ksgheisghselfjd"];
        const knownNames: [string, string][] = [
            ["typescript", "TypeScript"],
            ["c#", "C#"],
        ];

        for (const unknownLang of unknownNames) {
            assert.isUndefined(await data.getLanguageByName(unknownLang));
        }

        for (const knownLang of knownNames) {
            assert.strictEqual(
                (await data.getLanguageByName(knownLang[0]))?.name,
                knownLang[1]
            );
        }
    });

    it("gets languages by their extension", async function () {
        const unknownExtensions: string[] = ["fake-extension", "wdajdkfwkjf"];
        const knownExtensions: [string, string][] = [
            ["ts", "TypeScript"],
            ["cs", "C#"],
        ];

        for (const unknownExt of unknownExtensions) {
            assert.isUndefined(await data.getLanguageByExtension(unknownExt));
        }

        for (const knownExt of knownExtensions) {
            assert.strictEqual(
                (await data.getLanguageByExtension(knownExt[0]))?.name,
                knownExt[1]
            );
        }
    });
});
