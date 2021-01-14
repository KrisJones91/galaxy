import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class MoonsService {

    async getAll(query = {}) {
        return await dbContext.Moons.find(query)
    }

    async getOne(id) {
        let moonFound = await dbContext.Moons.findById(id)
        if (!moonFound) {
            throw new BadRequest("No Moon was found with that id")
        }
        return moonFound
    }

    async create(body) {
        return await dbContext.Moons.create(body)
    }

    async edit(update) {
        let updated = await dbContext.Moons.findOneAndUpdate({ _id: update.id }, update, { new: true })
        if (!updated) {
            throw new BadRequest("invalid id")
        }
        return updated
    }

    async delete(id) {
        let moon = await dbContext.Moons.findByIdAndDelete(id)
        if (!moon) {
            throw new BadRequest("No Moon exists with that id")
        }
        return "Destroyed the Moon"
    }


}

export const moonsService = new MoonsService();