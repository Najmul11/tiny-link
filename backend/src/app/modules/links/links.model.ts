import { Schema, model } from 'mongoose';
import { LinkModel, TLink } from './links.interface';

const LinkSchema = new Schema<TLink, Record<string, unknown>>({
  originalURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export const Link = model<TLink, LinkModel>('Link', LinkSchema);
