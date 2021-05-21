import {NextAuthRequest} from "next-auth/internals";
import {NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextAuthRequest, res: NextApiResponse) => {
    const strId = req.query.id;
    let id: number=0;
    if(strId) {
        id = parseInt(strId.toString());
    }
    if(!id) {
        res.status(403).json({error: `Subreddit ${strId} not found`});
        return;
    }
    try {
        const subreddit = await prisma.subreddit.findFirst({where: {id}});
        res.json(subreddit);
    } catch(err) {
        console.error(err);
        res.status(403).json(err);
    }
};

export default handler;
