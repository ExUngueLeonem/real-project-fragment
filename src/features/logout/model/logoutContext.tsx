import { createContext, ReactNode, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

interface ILogoutContext {
  logoutModal: ReturnType<typeof useDisclosure>;
}

const LogoutContext = createContext<ILogoutContext | null>(null);

export const LogoutContextProvider = ({ children }: { children: ReactNode }) => {
  const logoutModal = useDisclosure();

  return (
    <LogoutContext.Provider
      value={{
        logoutModal
      }}
    >
      {children}
    </LogoutContext.Provider>
  )
}

export const useLogoutContext = () => {
  const contextValue = useContext(LogoutContext);
  if (contextValue === null) throw new Error("не найден контекст useLogoutContext");
  return contextValue;
}