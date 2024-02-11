import { Model, Types } from 'mongoose';

export type TLink = {
  originalLink: string;
  shortLink: string;
  user: Types.ObjectId;
};

export type LinkModel = Model<TLink, Record<string, unknown>>;
