import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("req=", req?.query)
    try {
        const id = parseInt(req.query.id.toString())
        const sub= await prisma.subreddit.findFirst({where: {id}})
        if(sub) {
            return res.json(sub);
        }
        return res.status(404).json({});
    } catch(err) {
        res.json(err);
    }
}

export default handler;
