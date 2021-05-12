import NextAuth, {NextAuthOptions, User} from 'next-auth'
import Providers, {CommonProviderOptions} from 'next-auth/providers'
import {Awaitable} from "next-auth/internals/utils";
import Adapters from "next-auth/adapters"
import { PrismaClient } from "@prisma/client"
import {sha256} from "js-sha256";

type IUser = {
    id: number;
    username: string;
    name?: string;
    email: string;
}

const testUser: IUser = {id: 1, username: "john", name: "John", email: "john@gmail.com"}

interface ICredentialInput {
    label?: string
    type?: string
    value?: string
    placeholder?: string
}


type ICredentialsRecord = Record<string, ICredentialInput>;

interface ICredentialsConfig<C extends Record<string, ICredentialInput>> extends CommonProviderOptions {
    type: "credentials"
    credentials: C
    authorize(credentials: Record<keyof C, string>): Awaitable<User | null>
}

const credOptions: Partial<ICredentialsConfig<ICredentialsRecord>> = {
    name: 'Reddit',

    credentials: {
        email: {label: "Email", type: "text"},
        password: {label: "Password", type: "password"}
    },

    authorize: async (credentials) => {
        //const user = await User.findOne()

        console.log("credentials = ", credentials)
        const email = credentials.email;
        const hashPassword = sha256(credentials.password);
        console.log("credentials = ", email, hashPassword)
        try {
            const user = await prisma.user.findFirst({where: {email, hashPassword}})
             prisma.user
            console.log("user=", user)
            if (user) {
                return user;
            }
        } catch(err) {
            console.error(err);
        }
        return null;
    }
};

const prisma = new PrismaClient();


const options: NextAuthOptions = {
    providers: [
        Providers.Credentials(credOptions),
    ],
    session: {
        jwt: true,
    },

    adapter: Adapters.Prisma.Adapter({ prisma }),
    //secret: process.env.JWT_SIGNING_PRIVATE_KEY,
};

export default NextAuth(options);
