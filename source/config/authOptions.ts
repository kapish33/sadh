import crudOperations from "@/firebase/RealTime-Database/crud";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Admin Email",
          type: "email",
          placeholder: "Admin Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const user = (await crudOperations("GET_BY_ID", "admin", {
          id: "K18RdMeBwjIO9fEluyD4",
        })) as any;

        if (
          user &&
          bcrypt.compareSync(credentials.password, user.passwordHash)
        ) {
          return { id: user.id, name: user.name, email: user.email };
        }

        return null;
      },
    }),
  ],
  secret: "slaghlj$%^%$#2237o8c^3y$38y2@#$p83y@p",
};
