import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
  {
    title: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Blog = models.Blog || model("Blog", BlogSchema);
