import { createContext } from "react";

export interface LoginModalContextValue {
  openLoginModal: () => void;
}

export const LoginModalContext = createContext<LoginModalContextValue | undefined>(undefined);
