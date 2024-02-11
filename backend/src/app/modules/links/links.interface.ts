import { Model, Types } from 'mongoose';

export type TLink = {
  originalURL: string;
  shortURL: string;
  user: Types.ObjectId;
};

export type LinkModel = Model<TLink, Record<string, unknown>>;
