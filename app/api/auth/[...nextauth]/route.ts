import NextAuth, {type NextAuthConfig}  from "next-auth";
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthConfig = {
  providers: [
    Credentials,
    Google,
    Github
  ],
  
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { GET, POST} from '@/auth';