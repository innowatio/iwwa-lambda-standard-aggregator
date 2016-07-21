import dotenv from "dotenv";

dotenv.load();

export const MONGODB_URL = process.env.MONGODB_URL;
export const ACTION_INSERT = "insert";
export const ACTION_UPDATE = "update";
export const ACTION_DELETE = "delete";

// put all your collections here
export const COLLECTIONS = ["favorite-charts", "meter-reports", "sensors", "user-interactions"];
