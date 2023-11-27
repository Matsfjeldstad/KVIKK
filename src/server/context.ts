import { getServerAuthSession } from "@/lib/auth";
import db from "@/lib/db";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { type Session } from "next-auth";

type CreateContextOptions = {
    session: Session | null;
};

const createContextInner = (opts: CreateContextOptions) => {
    return {
        session: opts.session,
        db,
    };
};

export const createContext = async (opts: CreateNextContextOptions) => {
    const { req, res } = opts;
    const session = await getServerAuthSession({ req, res, }, );
    return await createContextInner({
        session,
    });
};
