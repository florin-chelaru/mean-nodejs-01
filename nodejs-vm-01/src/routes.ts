import {getUsersAction} from "./controller/GetUsersAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/users",
        method: "get",
        action: getUsersAction
    }
];