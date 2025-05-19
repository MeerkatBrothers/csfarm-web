"use client";

import { useState } from "react";

import { LoginModalContext } from "@/domains/auth/contexts/LoginModalContext";
import LoginModal from "@/domains/auth/components/LoginModal";

interface LoginModalProviderProps {
  children: React.ReactNode;
}

export const LoginModalProvider = ({ children }: LoginModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = (): void => {
    setIsOpen(true);
  };

  const close = (): void => {
    setIsOpen(false);
  };

  return (
    <LoginModalContext.Provider value={{ openLoginModal: open }}>
      {children}
      <LoginModal isOpen={isOpen} onClose={close} />
    </LoginModalContext.Provider>
  );
};
