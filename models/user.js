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
    match: [
      /^[A-Za-z]{7}$/,
      'Username invalid, it should be 7 characters long and contain only alphabetic characters.',
    ],
  },
  image: {
    type: String, 
  }
});

const Promptopia = models.Promptopia || model("Promptopia", UserSchema);

export default Promptopia;