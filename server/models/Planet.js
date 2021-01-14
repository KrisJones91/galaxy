import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Planet = new Schema(
    {
        title: { type: String, required: true },
        life: { type: String, defualt: false, required: true },
        color: { type: String, required: true },
        description: { type: String, required: true },
        star: { type: ObjectId, ref: "star", required: true },
        galaxy: { type: ObjectId, ref: "galaxy", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
