import { assert } from "chai";

import { time } from "./pastemyst";
import { ExpiresIn } from "../src/types/expiresIn";

describe("Time", function () {
    it("calculates expiry times", async function () {
        const tests: {
            createdAt: number;
            expiresIn: ExpiresIn;
            expected: number;
        }[] = [
            {
                createdAt: 1615242814,
                expiresIn: "2h",
                expected: 1615250014,
            },
            {
                createdAt: 1615121479,
                expiresIn: "1d",
                expected: 1615207879,
            },
            {
                createdAt: 1615297946,
                expiresIn: "1w",
                expected: 1615902746,
            },
        ];

        for (const test of tests) {
            const expiry = await time.expiresInToUnixTimestamp(
                test.createdAt,
                test.expiresIn
            );
            assert.strictEqual(expiry, test.expected);
        }
    });
});
