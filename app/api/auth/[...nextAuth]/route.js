import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';
import User from '@models/user';

// Define the NextAuth handler
const handler = NextAuth({
  // Configure Google authentication provider
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // Define session and signIn callbacks
  callbacks: {
    // Session callback
    async session({ session }) {
      try {
        // Fetch user information from MongoDB
        const sessionUser = await User.findOne({ email: session.user.email });
        session.user.id = sessionUser._id.toString();
        return session;
      } catch (error) {
        console.log("Error in session callback: ", error.message);
        return session;
      }
    },
    // SignIn callback
    async signIn({ profile }) {
      try {
        await connectToDB();
        // Check if user already exists in MongoDB
        const userExists = await User.findOne({ email: profile.email });
        // If user doesn't exist, create a new user document
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        // Return true to indicate successful sign-in
        return true;
      } catch (error) {
        console.log("Error in signIn callback: ", error.message);
        return false;
      }
    },
  },
});

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST };
