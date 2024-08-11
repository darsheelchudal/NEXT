import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import FacebookProvider from "next-auth/providers/facebook";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            $or: [
              { email: credentials.identifier },
              { email: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error("No user found with this credentials");
          }
          if (!user.isVerified) {
            throw new Error("Please verify your account before login");
          }
          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isCorrectPassword) {
            return user;
          } else {
            throw new Error("Please enter a correct password");
          }
        } catch (err: any) {
          throw new Error();
        }
      }, //to access , credentials.identifier.username
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.isVerified = user.isVerified?.toString();
        token.isAcceptingMessage = user.isAcceptingMessage;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id as string | undefined;
        session.user.isVerified = token.isVerified as boolean | undefined;
        session.user.isAcceptingMessage = token.isAcceptingMessage as
          | boolean
          | undefined;
        session.user.username = token.username as string | undefined;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
