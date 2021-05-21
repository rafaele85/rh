import Providers from "next-auth/providers";
import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    adapter: Adapters.Prisma.Adapter({prisma})
}

export default NextAuth(options);
