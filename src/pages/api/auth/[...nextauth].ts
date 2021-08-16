import NextAuth, { NextAuthOptions, User } from "next-auth";
import Providers from "next-auth/providers";

const options: NextAuthOptions = {
  providers: [
    Providers.Credentials({
      id: "credentials",
      name: "Network Credentials",
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
      },
      authorize: async ({ username, password }, req) => {
        console.log(process.env.LOCAL_USERNAME, username);
        console.log(process.env.LOCAL_PASSWORD, password);
        let user: User;
        if (
          username === process.env.LOCAL_USERNAME &&
          password === process.env.LOCAL_PASSWORD
        )
          user = { name: "Local Administrator" };
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
};

export default NextAuth(options);
