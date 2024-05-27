import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LogoWrapper, SimpleFormWrapper } from "shared/ui";
import { useAppSelector } from "shared/model";

export function LoginPage() {
  const { state } = useLocation();
  const user = useAppSelector((store) => store.user);

  if (user.isLogged) {
    return <Navigate to={state?.from ?? "/"} />;
  }

  return (
    <LogoWrapper>
      <SimpleFormWrapper>
        <Outlet/>
      </SimpleFormWrapper>
    </LogoWrapper>
  );
}



