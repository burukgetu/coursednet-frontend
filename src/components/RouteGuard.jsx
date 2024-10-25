/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react";

 function RouteGuard({ authenticated, user, element }) {
  const location = useLocation();



  console.log(authenticated, user, "useruser");

  if (!authenticated && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth" />;
  }

   // Allow access to /courses and /course/details/:id routes for authenticated users
   if (
    authenticated &&
    (location.pathname === "/courses" || location.pathname.startsWith("/course/details"))
  ) {
    return <Fragment>{element}</Fragment>;
  }

  if (
    authenticated &&
    user?.role !== "instructor" &&
    ( location.pathname.includes("instructor") ||
      location.pathname.includes("/auth") ||
      location.pathname === "/"
    )
  ) {
    return <Navigate to="/home" />;
  }

  if (
    authenticated &&
    user.role === "instructor" &&
    !location.pathname.includes("instructor")
  ) {
    return <Navigate to="/instructor" />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;
