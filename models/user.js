import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{7,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 7-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

const Promptopia = models.Promptopia || model("Promptopia", UserSchema);

export default Promptopia;