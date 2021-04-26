const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should return an object", () => {
        const e = new Employee();
        expect(typeof (e)).toBe("object");
    });

    it("should set name of employee using constructor", () => {
        const name = "Chris";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("should set id of employee using constructor", () => {
        const id = 10;
        const e = new Employee("chris", id);
        expect(e.id).toBe(id);
    });

    it("should set email of employee using constructor", () => {
        const testEmail = "chris@chris.com";
        const e = new Employee("chris", 1, testEmail);
        expect(e.email).toBe(testEmail);
    });

    describe("getName", () => {
        it("should get name of employee using getName() function", () => {
            const name = "Chris";
            const e = new Employee(name);
            expect(e.getName()).toBe(name);
        })
    });

    describe("getId", () => {
        it("should get id of employee using getId function", () => {
            const id = 10;
            const e = new Employee("chris", id);
            expect(e.getId()).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("should get email of employee using getEmail function", () => {
            const testEmail = "chris@chris.com";
            const e = new Employee("chris", 1, testEmail);
            expect(e.getEmail()).toBe(testEmail);
        });
    });

    describe("getRole", () => {
        it("should get role of employee which is set to employee", () => {
            const testRole = "Employee";
            const e = new Employee("chris", 1, "chris@chris.com");
            expect(e.getRole()).toBe(testRole);
        });
    });

})