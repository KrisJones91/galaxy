import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class PlanetsService {
    async getAll(query = {}) {
        return await dbContext.Planets.find(query)
    }

    async getOne(id) {
        let planetFound = await dbContext.Planets.findById(id)
        if (!planetFound) {
            throw new BadRequest("No Planet was found with that id")
        }
        return planetFound
    }

    async create(body) {
        return await dbContext.Planets.create(body)
    }

    async edit(update) {
        let updated = await dbContext.Planets.findOneAndUpdate({ _id: update.id }, update, { new: true })
        if (!updated) {
            throw new BadRequest("invalid id")
        }
        return updated
    }

    async delete(id) {
        let planet = await dbContext.Planets.findByIdAndDelete(id)
        if (!planet) {
            throw new BadRequest("No Planet exists with that id")
        }
        return "Destroyed the Planet"
    }
}

export const planetsService = new PlanetsService();