import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Settings from "./Settings";
import Auth from "./Auth";
import Common from "./Common";
import Users from "./Users";
import Roles from "./Roles";
import Reqform from "./Reqform";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    auth: Auth,
    commonData: Common,
    user: Users,
    role: Roles,
    reqform: Reqform,
  });
