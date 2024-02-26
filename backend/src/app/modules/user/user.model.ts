import { Schema, model } from 'mongoose';
import { TUser, UserModel } from './user.interface';

const UserSchema = new Schema<TUser, Record<string, unknown>>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export const User = model<TUser, UserModel>('User', UserSchema);
