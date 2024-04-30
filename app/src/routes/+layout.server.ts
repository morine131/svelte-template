import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.getSession();
  const isAuthPage = event.url.pathname === "/auth";

  if (!session && !isAuthPage) {
    throw redirect(303, "/auth");
  }

  return {
    session,
  };
};
