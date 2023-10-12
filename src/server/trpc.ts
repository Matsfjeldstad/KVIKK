import { TRPCError, initTRPC } from "@trpc/server";
import { createContext } from "./context";
import superjson from "superjson";

const t = initTRPC.context<typeof createContext>().create({
    transformer: superjson,
    errorFormatter({ shape }) {
        return shape;
    },
});

// type CreateContextOptions = Record<string, never>;

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;

const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

export const protectedProcedure = t.procedure.use(isAuthed);