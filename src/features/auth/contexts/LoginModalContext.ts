import { createContext } from 'react';

export interface LoginModalContextValue {
  open: () => void;
}

export const LoginModalContext = createContext<LoginModalContextValue | undefined>(undefined);
