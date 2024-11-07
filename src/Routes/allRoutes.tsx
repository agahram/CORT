import { Navigate } from "react-router-dom";

// Dashboard

import Ecommerce from "pages/Dashboard/Ecommerce/Index";

// Error

import Error404 from "pages/AuthAndPages/Error/Error404";
import Error500 from "pages/AuthAndPages/Error/Error500";
import Error503 from "pages/AuthAndPages/Error/Error503";
import OfflinePage from "pages/AuthAndPages/Error/OfflinePage";

// Auth

import Login from "pages/Authantication/Login";
import Logout from "pages/Authantication/Logout";
import ForgotPassword from "pages/Authantication/ForgotPassword";
import Register from "pages/Authantication/Register";

import UserProfile from "pages/Authantication/UserProfile";


interface RouteObject {
  path: string;
  component: any;
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/index", component: <Ecommerce /> },

  { path: "/dashboard", component: <Ecommerce /> },

  //  Profile
  { path: "user-profile", component: <UserProfile /> },

  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  { path: "*", component: <Navigate to="/dashboard" /> },

];

const publicRoutes: Array<RouteObject> = [

  // Authanticatio inner page
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgotPassword /> },
  { path: "/register", component: <Register /> },

  // Error
  { path: "/auth-404", component: <Error404 /> },
  { path: "/auth-500", component: <Error500 /> },
  { path: "/auth-503", component: <Error503 /> },
  { path: "/auth-offline", component: <OfflinePage /> },

];

export { authProtectedRoutes, publicRoutes }