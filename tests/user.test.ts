import chalk from "chalk";
import { assert } from "chai";

import { users } from "./pastemyst";

describe("User", function () {
    const username = process.env.API_USERNAME;

    if (!username) {
        console.warn(
            chalk.yellow(
                "No API username was set, related tests will be skipped."
            )
        );
        return;
    }

    it("checks if a user exists", async function () {
        assert.isTrue(await users.userExists(username));
    });

    it("gets a user profile", async function () {
        assert.strictEqual((await users.getUser(username))?.username, username);
    });
});
