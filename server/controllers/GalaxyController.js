import { galaxyService } from "../services/GalaxyService";
import BaseController from "../utils/BaseController";



export class GalaxyController extends BaseController {
    constructor() {
        super("api/galaxy");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }


    async getAll(req, res, next) {
        try {
            let data = await galaxyService.getAll()
            res.send(data)

        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            res.send(await galaxyService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            res.send(await galaxyService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await galaxyService.edit(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await galaxyService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }

}