import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


const googleID = process.env.GOOGLE_ID;
const googleSecret = process.env.GOOGLE_SECRET;


export const authOptions = {
    
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: googleID,
            clientSecret: googleSecret,
        })    
    ]
}