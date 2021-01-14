import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";



export class PlanetsController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }


    async getAll(req, res, next) {
        try {
            let data = await planetsService.getAll()
            res.send(data)
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            res.send(await planetsService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            res.send(await planetsService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await planetsService.edit(req.body)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await planetsService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }

}