"use client";

import { useState, useEffect, ReactNode } from "react";

import { LoginModalContext } from "@/domains/auth/contexts/LoginModalContext";
import LoginModal from "@/domains/auth/components/LoginModal";

interface LoginModalProviderProps {
  children: ReactNode;
}

export const LoginModalProvider = ({ children }: LoginModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const open = (): void => setIsOpen(true);

  const close = (): void => setIsOpen(false);

  return (
    <LoginModalContext.Provider value={{ openLoginModal: open }}>
      {children}
      <LoginModal isOpen={isOpen} onClose={close} />
    </LoginModalContext.Provider>
  );
};
