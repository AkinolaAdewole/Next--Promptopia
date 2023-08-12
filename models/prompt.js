import { Schema, model, models } from 'mongoose';

// Ther is no need to import mongoose since schema has been imported
const PromptSchema= new Schema ({
    creator:{
        type:Schema.Types.ObjectId,
        ref:"Promptopia",
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

const Prompt = models.Prompt || model('Prompt', PromptSchema);
export default Prompt;