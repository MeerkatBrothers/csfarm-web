"use client";

import { useContext } from "react";

import ProviderMissingError from "@/lib/errors/providerMissingError";

import { LoginModalContext, LoginModalContextValue } from "@/domains/auth/contexts/LoginModalContext";

export const useLoginModal = () => {
  const context: LoginModalContextValue | undefined = useContext(LoginModalContext);
  if (!context) {
    throw new ProviderMissingError("useLoginModal");
  }

  return context;
};
