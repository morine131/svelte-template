import prisma from "../../lib/prisma";
import type { Actions } from "./$types";

export async function load() {
  const tanks = await prisma.tank.findMany();

  return { tanks };
}

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name").toString();

    const tank = await prisma.tank.create({
      data: {
        name,
      },
    });

    return tank;
  },
};
