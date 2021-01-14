import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Star = new Schema(
    {
        title: { type: String, required: true },
        size: { type: Number, required: true },
        brightness: { type: String, required: true },
        color: { type: String, required: true },
        galaxy: { type: ObjectId, ref: "galaxy", required: true }

    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;
