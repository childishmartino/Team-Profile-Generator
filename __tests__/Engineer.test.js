const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should set github using constructor", () => {
        const testGitHub = "childishmartino"
        const e = new Engineer("chris", 1, "chris@chris.com", testGitHub);
        expect(e.github).toBe(testGitHub);
    });

    describe("getGithub", () => {
        it ("should get github of engineer using getGethub function", () => {
            const testGitHub = "childishmartino";
            const e = new Engineer("chris", 1, "chris@chris.com", testGitHub);
            expect(e.getGithub()).toBe(testGitHub);
        });
    });

    describe("getRole", () => {
        it ("should get role of engineer which is set to engineer", () => {
            const testRole = "Engineer";
            const e = new Engineer("chris", 1, "chris@chris.com", "childishmartino");
            expect(e.getRole()).toBe(testRole);
        });
    });
})