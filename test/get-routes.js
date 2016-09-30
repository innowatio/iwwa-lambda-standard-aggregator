import {expect} from "chai";
import getRoutes from "get-routes";

import {COLLECTIONS} from "config";

describe("getRoutes", () => {
    it("returns the correct routes", () => {

        const router = getRoutes(() => {});
        const expectedRoutes = COLLECTIONS.reduce((state, collection) => {
            return [
                ...state,
                `element inserted in collection ${collection}`,
                `element replaced in collection ${collection}`,
                `element removed in collection ${collection}`,
            ];
        }, []);

        expect(Object.keys(router.routes)).to.deep.equals(expectedRoutes);
    });
});
