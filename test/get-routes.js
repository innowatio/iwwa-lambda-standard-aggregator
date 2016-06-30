import {expect} from "chai";
import getRoutes from "get-routes";

describe("getRoutes", () => {
    it("returns the correct routes", () => {

        const router = getRoutes(() => {});
        const expectedRoutes = [
            "element inserted in collection favorite-charts",
            "element replaced in collection favorite-charts",
            "element removed in collection favorite-charts",
            "element inserted in collection meter-reports",
            "element replaced in collection meter-reports",
            "element removed in collection meter-reports",
            "element inserted in collection sensors",
            "element replaced in collection sensors",
            "element removed in collection sensors"];

        expect(Object.keys(router.routes)).to.deep.equals(expectedRoutes);
    });
});