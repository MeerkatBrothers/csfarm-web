"use client";

import { ReactNode, useRef } from "react";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { alertError } from "@/lib/utils/ui";
import ResultError from "@/lib/errors/resultError";

interface QueryProviderProps {
  children: ReactNode;
}

const QueryProvider = ({ children }: QueryProviderProps) => {
  const router = useRouter();

  const queryClientRef = useRef<QueryClient | null>(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
    queryClientRef.current.setDefaultOptions({
      mutations: {
        onError: (error) => {
          if (error instanceof ResultError && error.statusCode === 401) {
            alert("인증이 만료되었어요. 다시 로그인 해주세요.");

            queryClientRef.current?.clear();

            router.replace("/");

            return;
          }

          alertError(error);
        },
      },
    });
  }

  return <QueryClientProvider client={queryClientRef.current!}>{children}</QueryClientProvider>;
};

export default QueryProvider;
