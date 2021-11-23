import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    //configuring one or more authentication providers
    providers:[
        Providers.Facebook({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
          }),
    ],
});

