import config from "config";
import { authenticate } from "ldap-authentication";
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
      authorize: async ({ username, password }) => {
        // Check local env var user creds first before LDAP
        if (
          username === process.env.LOCAL_USERNAME &&
          password === process.env.LOCAL_PASSWORD
        )
          return { name: "Netpane Admin" };

        // Search provided base DN for user credentials
        const options = {
          ldapOpts: {
            url: config.ldapUrl,
          },
          adminDn: config.ldapAdminDn,
          adminPassword: config.ldapAdminPassword,
          userPassword: password,
          userSearchBase: config.ldapUserSearchBase,
          usernameAttribute: config.ldapUsernameAttribute,
          username: username,
        };
        try {
          const user = await authenticate(options);
          return {
            ...user,
            name:
              user[config.ldapUserDisplayNameAttribute] ||
              user.displayName ||
              user.gecos ||
              user[config.ldapUsernameAttribute],
          };
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
};

export default NextAuth(options);
