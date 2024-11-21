import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const config = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

const handler = NextAuth(config);

export const { auth, signIn, signOut } = handler;
export const { GET, POST } = handler;