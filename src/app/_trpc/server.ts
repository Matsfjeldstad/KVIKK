import {
  createTRPCProxyClient,
  loggerLink,
  unstable_httpBatchStreamLink as httpBatchStreamLink ,
} from "@trpc/client";
import { headers } from "next/headers";

import { type AppRouter } from "@/server";
import { getUrl, transformer } from "./shared";

export const api = createTRPCProxyClient<AppRouter>({
  transformer,
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === "development" ||
        (op.direction === "down" && op.result instanceof Error),
    }),
    httpBatchStreamLink({
      url: getUrl(),
      headers() {
        const heads = new Map(headers());
        heads.set("x-trpc-source", "rsc");
        return Object.fromEntries(heads);
      },
    }),
  ],
});
