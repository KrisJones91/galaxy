import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Moon = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        planet: { type: ObjectId, ref: "planet", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;
