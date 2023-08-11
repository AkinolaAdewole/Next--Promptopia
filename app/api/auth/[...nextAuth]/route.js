import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';
import Promptopia from '@models/user';


console.log({
    clientId:process.env.GOOGLE_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
});

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    async session({ session }){},

    async signIn({ profile }){
        try {
            await connectToDB();
            //check if a user already exist
            const userExist = await Promptopia.findOne({ email: profile.name});

            // if not, create a new user and save user in MongoDB
            if(!userExist){
                await Promptopia.create({
                    email:profile.email,
                    username: profile.name.replace("","").toLowerCase(),
                    image:profile.picture,
                })
            }

            return true;
        } catch (error) {
            console.error(error);
        }
    }
})

export {handler as GET, handler as POST}