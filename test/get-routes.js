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
            "element removed in collection sensors",
            "element inserted in collection user-interactions",
            "element replaced in collection user-interactions",
            "element removed in collection user-interactions",
            "element inserted in collection answers",
            "element replaced in collection answers",
            "element removed in collection answers",
            "element inserted in collection questions",
            "element replaced in collection questions",
            "element removed in collection questions",
        ];

        expect(Object.keys(router.routes)).to.deep.equals(expectedRoutes);
    });
});
