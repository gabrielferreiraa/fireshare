import { expect } from "chai";
import api from "tools/api";

describe("Api Config", () => {
    test("should be a object", () => {
        expect(api).to.be.a("object");
    });

    test("should be have property url", () => {
        expect(api).have.property("url");
    });

    test("url should be string", () => {
        expect(api.url).to.be.a("string");
    });

    test("url should has value", () => {
        expect(api.url).to.not.be.empty;
    });
});
