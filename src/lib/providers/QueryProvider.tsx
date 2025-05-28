"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ResultError from "@/lib/errors/resultError";
import { getErrorMessage } from "@/lib/utils/error";

import { useLoginModal } from "@/domains/auth/hooks/useLoginModal";

interface Props {
  children: React.ReactNode;
}

const QueryProvider = ({ children }: Props) => {
  const { openLoginModal } = useLoginModal();

  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (error) => {
          if (error instanceof ResultError && error.statusCode === 401) {
            openLoginModal();

            return;
          }

          const errorMessage: string = getErrorMessage(error);

          alert(errorMessage);
        },
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
