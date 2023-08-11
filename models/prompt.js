import { Schema, model, models } from 'mongoose';

const PromptSchema= new SchemaType({
    creator:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    prompt:{
        type:String,
        required:[true, 'Prompt is required'],
    },
    tag:{
        type:String,
        required:[true, 'Tag is required'],
    }
});

