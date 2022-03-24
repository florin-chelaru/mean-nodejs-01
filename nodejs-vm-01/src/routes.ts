import {getUsersAction} from "./controller/GetUsersAction";
import {getMeetupsAction} from "./controller/GetMeetupsAction";
import {createMeetupAction} from "./controller/CreateMeetupAction";

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/users",
    method: "get",
    action: getUsersAction
  },
  {
    path: "/meetups",
    method: "get",
    action: getMeetupsAction
  },
  {
    path: "/meetup",
    method: "post",
    action: createMeetupAction
  }
];