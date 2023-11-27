const isProd = true;
export const BASE_URL = isProd ? "/api" : "http://localhost:8000/api";
export const SOCKET_URL = isProd ? "" : "http://localhost:8000";

//student url
export const STUDENT_URL = `${BASE_URL}/student`;
//auth url
export const AUTH_URL = `${BASE_URL}/auth`;
