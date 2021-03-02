const { hello } = require("../../..");
describe("Sample tests", function () {
    it("Should say hello", function () {
        expect(hello()).toBeDefined();
        expect(hello()).toEqual("Good morning");
    });
});
