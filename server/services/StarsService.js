import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class StarsService {
    async getAll(query = {}) {
        return await dbContext.Stars.find(query)
    }

    async getOne(id) {
        let starFound = await dbContext.Stars.findById(id)
        if (!starFound) {
            throw new BadRequest("No Stars were found with that id")
        }
        return starFound
    }

    async create(body) {
        return await dbContext.Stars.create(body)
    }

    async edit(update) {
        let updated = await dbContext.Stars.findOneAndUpdate({ _id: update.id }, update, { new: true })
        if (!updated) {
            throw new BadRequest("invalid id")
        }
        return updated
    }

    async delete(id) {
        let star = await dbContext.Stars.findByIdAndDelete(id)
        if (!star) {
            throw new BadRequest("No Star exists with that id")
        }
        return "Destroyed the Star"
    }
}

export const starsService = new StarsService();