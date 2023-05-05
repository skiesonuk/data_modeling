const mongoose = require("mongoose");

//user schema - one-one
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//find the total post created by this user
userSchema.virtual("postCount").get(function () {
  return this.posts.length;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
