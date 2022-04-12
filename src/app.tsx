import React, { Suspense } from "react";
import { FullPageLoading } from "./components/full-page-loading";
import { useAuth } from "./context/auth-context";

const AuthenticatedApp = React.lazy(() => import("@src/routes"));
const UnauthenticatedApp = React.lazy(() => import("@src/unauthenticated-app"));

export const App = () => {
  const { user } = useAuth();
  return (
    <Suspense fallback={<FullPageLoading />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
};
