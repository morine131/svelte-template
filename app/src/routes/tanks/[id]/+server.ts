import prisma from "../../../lib/prisma";

export async function DELETE({ params }) {
  console.log(params);
  await prisma.tank.delete({
    where: {
      id: Number(params.id),
    },
  });
  console.log("deleted");
  return new Response(null, { status: 201 });
}
