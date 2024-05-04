import prisma from "../../lib/prisma";
import type { Actions } from "./$types";

import { z } from "zod";

const formDataSchema = z.object({
  name: z.string(),
});

export async function load() {
  const tanks = await prisma.tank.findMany();

  return { tanks };
}

export const actions: Actions = {
  default: async ({ request }) => {
    const { name } = formDataSchema.parse(await request.formData());

    const tank = await prisma.tank.create({
      data: {
        name,
      },
    });

    return tank;
  },
};
