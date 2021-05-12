import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seed() {
    try {
        console.log("seed.1")
        await prisma.user.upsert({
            where: {email: 'john@gmail.com'},
            update: {},
            create: {
                email: `john@gmail.com`,
                name: 'John',
                hashPassword: "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5"
            },
        });
        console.log("seed.2")
        await prisma.subreddit.create({
            data: { name: "next.js" },
        });
        console.log("seed.3")
        await prisma.subreddit.create({
            data: { name: "react.js" },
        });
        console.log("seed.4")
        await prisma.subreddit.create({
            data: { name: "javascript" },
        });
        console.log("seed.5")
        await prisma.subreddit.create({
            data: { name: "prisma" },
        });
        console.log("seed.6")
    } catch(err) {
        console.error(err);
    }

}

void seed();

