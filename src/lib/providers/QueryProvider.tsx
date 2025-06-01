"use client";

import { useMemo, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { alertError } from "@/lib/utils/ui";

interface Props {
  children: ReactNode;
}

const QueryProvider = ({ children }: Props) => {
  const queryClient: QueryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            onError: (error) => alertError(error),
          },
        },
      }),
    [],
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
