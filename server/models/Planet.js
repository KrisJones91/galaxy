import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Planet = new Schema(
    {
        title: { type: String, required: true },
        life: { type: String, defualt: false, required: true },
        color: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
