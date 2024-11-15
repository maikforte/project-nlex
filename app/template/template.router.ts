import { Router, Request, Response, NextFunction } from "express";

interface IController {
	createNew(req: Request, res: Response, next: NextFunction): Promise<void>;
	getOne(req: Request, res: Response, next: NextFunction): Promise<void>;
	getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
	updateOne(req: Request, res: Response, next: NextFunction): Promise<void>;
	deleteOne(req: Request, res: Response, next: NextFunction): Promise<void>;
}

export const router = (route: Router, controller: IController): Router => {
	const routes = Router();

	/**
	 * @openapi
	 * /api/template/{id}:
	 *   get:
	 *     summary: Get one by id
	 *     description: Get one data by id
	 *     parameters:
	 *	     - in: path
	 *	       name: id
	 *	       required: true
	 *	       schema:
	 *	         type: integer
	 *     responses:
	 *       200:
	 *         description: Returns one data by id.
	 */
	routes.get("/:id", controller.getOne);

	/**
	 * @openapi
	 * /api/template:
	 *   get:
	 *     summary: Get all
	 *     description: Get all data
	 *     responses:
	 *       200:
	 *         description: Returns all data.
	 */
	routes.get("/", controller.getAll);

	/**
	 * @openapi
	 * /api/template:
	 *   post:
	 *     summary: Create new
	 *     description: Create new data
	 *     requestBody:
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *     responses:
	 *       200:
	 *         description: Returns created data.
	 */
	routes.post("/", controller.createNew);

	/**
	 * @openapi
	 * /api/template/{id}:
	 *   patch:
	 *     summary: Update one by id
	 *     description: Update one data by id
	 *     parameters:
	 *	     - in: path
	 *	       name: id
	 *	       required: true
	 *	       schema:
	 *	         type: integer
	 *     requestBody:
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *     responses:
	 *       200:
	 *         description: Returns updated data.
	 */
	routes.patch("/:id", controller.updateOne);

	/**
	 * @openapi
	 * /api/template/{id}:
	 *   delete:
	 *     summary: Delete one by id
	 *     description: Delete one data by id
	 *     parameters:
	 *	     - in: path
	 *	       name: id
	 *	       required: true
	 *	       schema:
	 *	         type: integer
	 *     responses:
	 *       200:
	 *         description: Returns deleted data.
	 */
	routes.delete("/:id", controller.deleteOne);

	route.use("/template", routes);

	return route;
};
