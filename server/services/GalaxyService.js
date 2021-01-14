import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxyService {
    async getAll(query = {}) {
        return await dbContext.Galaxys.find(query)
    }

    async getOne(id) {
        let galaxyFound = await dbContext.Galaxys.findById(id)
        if (!galaxyFound) {
            throw new BadRequest("No Galaxy found with that id")
        }
        return galaxyFound
    }

    async create(body) {
        return await dbContext.Galaxys.create(body)
    }

    async edit(update) {
        let updated = await dbContext.Galaxys.findOneAndUpdate({ _id: update.id }, update, { new: true })
        if (!updated) {
            throw new BadRequest("invalid id")
        }
        return updated
    }

    async delete(id) {
        let galaxy = await dbContext.Galaxys.findByIdAndDelete(id)
        if (!galaxy) {
            throw new BadRequest("No Galaxy exists with that id")
        }
        return "Destroyed the Galaxy"
    }
}

export const galaxyService = new GalaxyService();