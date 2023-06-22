const APP_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  PROFILE: "/profile",
  SETTINGS: "/settings",
};

const BASE_API_URL = "/api";

const API_ROUTES = {
  VALIDATE_USER: `${BASE_API_URL}/auth/validate-user`,
  LOGIN: `${BASE_API_URL}/auth/login`,
  SIGNUP: `${BASE_API_URL}/auth/signup`,
};

export { APP_ROUTES, API_ROUTES };
