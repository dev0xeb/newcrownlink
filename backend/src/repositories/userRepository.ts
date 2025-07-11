import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();
export async function createUser(data: {email: string; password: string; name: string}) {
    return prisma.user.create({data});
}

export async function findUserByEmail(email: string) {
    return prisma.user.findUnique({where: {email}})
}

export async function findAllUsers() {
    return prisma.user.findMany({
        select:{
            id: true,
            email: true,
            name: true,
            role: true
        }
    })
}