import chalk from "chalk";
import dotenv from "dotenv";

import * as pastemyst from "../src";

dotenv.config();

const apiToken = process.env.API_TOKEN;
if (apiToken) {
    pastemyst.authorize(apiToken);
} else {
    console.warn(
        chalk.yellow(
            "No API token was supplied in the environment variables. " +
                "Unit tests that require authorization may not pass."
        )
    );
}

export * from "../src";
