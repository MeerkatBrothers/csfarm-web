"use client";

import { useState, useEffect, ReactNode } from "react";

import { LoginModalContext } from "@/domains/auth/contexts/LoginModalContext";
import LoginModal from "@/domains/auth/components/LoginModal";

interface LoginModalProviderProps {
  children: ReactNode;
}

export const LoginModalProvider = ({ children }: LoginModalProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isModalOpen]);

  const open = (): void => setIsModalOpen(true);

  const close = (): void => setIsModalOpen(false);

  return (
    <LoginModalContext.Provider value={{ openLoginModal: open }}>
      {children}
      <LoginModal isOpen={isModalOpen} onClose={close} />
    </LoginModalContext.Provider>
  );
};
