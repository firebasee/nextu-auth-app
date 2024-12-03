import { PrismaClient } from '@prisma/client';

let prismaDb: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prismaDb = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prismaDb = global.prisma;
}

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export default prismaDb;
