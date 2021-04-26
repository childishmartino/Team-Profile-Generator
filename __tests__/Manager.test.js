const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should set office number using constructor", () => {
        const testNum = 8
        const e = new Manager("chris", 1, "chris@chris.com", testNum);
        expect(e.officeNum).toBe(testNum);
    });

    describe("getOfficeNum", () => {
        it ("should get office number of manager using getOfficeNum function", () => {
            const testNum = 8;
            const e = new Manager("chris", 1, "chris@chris.com", testNum);
            expect(e.getOfficeNum()).toBe(testNum);
        });
    });

    describe("getRole", () => {
        it ("should get role of manager which is set to manager", () => {
            const testRole = "Manager";
            const e = new Manager("chris", 1, "chris@chris.com", 1);
            expect(e.getRole()).toBe(testRole);
        });
    });
})