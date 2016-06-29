import "babel-polyfill";

import getRoutes from "./get-routes";
import pipeline from "./pipeline";


export const handler = getRoutes(pipeline);
