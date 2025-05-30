"use client";

import { useMemo, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { getErrorMessage } from "@/lib/utils/error";

interface Props {
  children: ReactNode;
}

const QueryProvider = ({ children }: Props) => {
  const queryClient: QueryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            onError: (error) => {
              const errorMessage: string = getErrorMessage(error);

              alert(errorMessage);
            },
          },
        },
      }),
    [],
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
