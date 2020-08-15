import jwt_decode from "jwt-decode";
import { asyncRouterMap } from "@/router/index";

const state: any = {
  user: null,
  routers: asyncRouterMap
};

export default state;
