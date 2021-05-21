import {NextAuthRequest} from "next-auth/internals";
import {NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextAuthRequest, res: NextApiResponse) => {
    try {
        const allSubs = await prisma.subreddit.findMany();
        res.json(allSubs);
    } catch(err) {
        console.error(err);
        res.status(403).json(err);
    }
};

export default handler;
