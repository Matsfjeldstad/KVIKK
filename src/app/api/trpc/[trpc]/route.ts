import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server";
import db from "@/lib/db";
import { authConfig, getServerAuthSession } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { createContext } from "@/server/context";

createContext;
const handler = (req: Request) =>
    fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: async () => ({ session: await getServerSession(authConfig), db: db }),
    });

export { handler as GET, handler as POST };
