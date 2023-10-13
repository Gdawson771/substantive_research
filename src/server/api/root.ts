import { exampleRouter } from "substantive_project/server/api/routers/example";
import { createTRPCRouter } from "substantive_project/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
