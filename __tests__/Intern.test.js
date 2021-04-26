const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should set school using constructor", () => {
        const testSchool = "UNT"
        const e = new Intern("chris", 1, "chris@chris.com", testSchool);
        expect(e.school).toBe(testSchool);
    });

    describe("getSchool", () => {
        it ("should get school of intern using getSchool function", () => {
            const testSchool = "UNT";
            const e = new Intern("chris", 1, "chris@chris.com", testSchool);
            expect(e.getSchool()).toBe(testSchool);
        });
    });

    describe("getRole", () => {
        it ("should get role of intern which is set to intern", () => {
            const testRole = "Intern";
            const e = new Intern("chris", 1, "chris@chris.com", "UNT");
            expect(e.getRole()).toBe(testRole);
        });
    });
})