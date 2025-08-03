import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
})

export  {prisma};