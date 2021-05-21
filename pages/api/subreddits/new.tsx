import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();
//    const newDummyReddit = prisma.subreddit.create({data: { }})
};

export default handler;
