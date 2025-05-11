// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@/lib/generated/prisma";

import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  // Clear existing data
  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });

  console.log("Seeding completed successfully!");
}

main();
