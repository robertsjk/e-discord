"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD
// import { useState } from "react";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
=======
import { useState } from "react";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
>>>>>>> v-2

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
