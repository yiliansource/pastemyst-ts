import { assert } from "chai";

import { data } from "./pastemyst";

describe("Data", function () {
    it("gets languages by name", async function () {
        assert.isUndefined(await data.getLanguageByName("does not exist"));
        assert.isUndefined(await data.getLanguageByName("ksgheisghselfjd"));

        assert.strictEqual(
            (await data.getLanguageByName("typescript"))?.name,
            "TypeScript"
        );
    });

    it("gets languages by their extension", async function () {
        assert.isUndefined(await data.getLanguageByExtension("fake-extension"));

        assert.strictEqual(
            (await data.getLanguageByExtension("ts"))?.name,
            "TypeScript"
        );
    });
});
