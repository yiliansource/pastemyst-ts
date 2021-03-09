import chalk from "chalk";
import { assert } from "chai";

import { pastes } from "./pastemyst";
import { Paste } from "../src/types/paste";
import { Pasty } from "../src/types/pasty";

describe("Paste", function () {
    const createdPastes: Array<Paste> = [];
    const samplePasty: Omit<Pasty, "_id"> = {
        title: "Test Pasty",
        language: "plain text",
        code: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };

    after(async function () {
        if (createdPastes.length > 0) {
            console.log(chalk.gray("\n==== Paste Cleanup ===="));
            for (const createdPaste of createdPastes) {
                const format = chalk`{cyan ${createdPaste.title}} (${createdPaste._id})`;
                console.log(chalk`{gray Cleaning up paste ${format}}.`);

                await pastes.deletePaste(createdPaste._id);
            }
            console.log(chalk.gray("=======================\n"));
        }
    });

    it("retrieves pastes", async function () {
        const paste = await pastes.getPaste("io1m982a");

        assert.isDefined(paste);
        assert.strictEqual(paste!.title, "[PasteMyst-TS] API Get Test");
    });

    it("creates pastes", async function () {
        const title = "[PasteMyst-TS] API Create Test";

        const paste = await pastes.createPaste({
            title: title,
            expiresIn: "2h",
            pasties: [samplePasty],
        });

        assert.isDefined(paste);
        assert.strictEqual(paste!.title, title);

        createdPastes.push(paste!);
    });

    it("creates private pastes", async function () {
        const title = "[PasteMyst-TS] API Create Private Test";

        const paste = await pastes.createPaste({
            title: title,
            expiresIn: "2h",
            pasties: [samplePasty],
            isPrivate: true,
        });

        assert.isDefined(paste);
        assert.strictEqual(paste!.title, title);
        assert.isTrue(paste!.isPrivate);

        createdPastes.push(paste!);
    });

    it("deletes pastes", async function () {
        const paste = await pastes.createPaste({
            pasties: [samplePasty],
        });

        assert.isDefined(paste);

        await pastes.deletePaste(paste!._id);
        const deletedPaste = await pastes.getPaste(paste!._id);

        assert.isUndefined(deletedPaste);
    });

    it("edits pastes", async function () {
        const paste = await pastes.createPaste({
            pasties: [samplePasty],
        });

        assert.isDefined(paste);

        const desiredTitle = "[PasteMyst-TS] API Edit Test";
        const editedPaste = await pastes.editPaste(paste!._id, {
            title: desiredTitle,
        });

        assert.isDefined(editedPaste);
        assert.strictEqual(editedPaste!.title, desiredTitle);

        createdPastes.push(editedPaste!);
    });
});
