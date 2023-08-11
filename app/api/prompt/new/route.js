import { connectToDB } from "@utils/database";

export const POST = async (req)=>{
    const {userId, prompt, tag} = await req.json();

    try {
        await connectToDB();
    } catch (error) {
        return new Response("Failed to create a new prompt", {status:500})
    }
}