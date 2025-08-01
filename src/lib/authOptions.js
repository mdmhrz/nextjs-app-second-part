import dbConnect, { collectionName } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";


export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                const { username, password } = credentials;


                // check user
                const user = await dbConnect(collectionName.USER_CREDENTIALS).findOne({ username })

                //check user password
                const isPasswordOK = password == user.password;


                if (isPasswordOK) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {

            if (account) {
                try {
                    const { providerAccountId, provider } = account;
                    const { email: user_email, image, name } = user;

                    const payload = {
                        role: 'user', providerAccountId, provider, user_email, image, name
                    }
                    // console.log('from singin callback', payload);

                    const userCollection = dbConnect(collectionName.USER_INFO)

                    const isUserExist = await userCollection.findOne({ providerAccountId })
                    if (!isUserExist) {
                        await userCollection.insertOne(payload)
                    }
                } catch (error) {
                    console.log(error);
                    return false
                }

            }


            return true
        },
        async session({ session, token, user }) {
            if (token) {
                session.user.username = token.username
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.username = user.username
                token.role = user.role
            }
            return token
        }
    }
}