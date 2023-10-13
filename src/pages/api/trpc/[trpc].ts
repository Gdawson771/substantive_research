import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "substantive_project/env.mjs";
import { appRouter } from "substantive_project/server/api/root";
import { createTRPCContext } from "substantive_project/server/api/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
