const APP_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  SETTINGS: "/settings",
};

const base_API_URL = "/api";

const API_ROUTES = {
  VALIDATE_USER: `${base_API_URL}/validate-user`,
  LOGIN: `${base_API_URL}/login`,
};

export { APP_ROUTES, API_ROUTES };
