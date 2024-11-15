import { Request, Response, NextFunction } from "express";
import templateService from "../../services/template.service";

export const controller = () => {
	const getOne = async (req: Request, res: Response, next: NextFunction) => {
		const { id } = req.params;
		const data = await templateService.getOne(Number(id));
		res.send(data);
	};

	const getAll = async (req: Request, res: Response, next: NextFunction) => {
		const data = await templateService.getAll();
		res.send(data);
	};

	const createNew = async (req: Request, res: Response, next: NextFunction) => {
		const body = req.body;
		const data = await templateService.createNew(body);
		res.send(data);
	};

	const updateOne = async (req: Request, res: Response, next: NextFunction) => {
		const { id } = req.params;
		const body = req.body;
		const data = await templateService.updateOne(Number(id), body);
		res.send(data);
	};

	const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
		const { id } = req.params;
		const data = await templateService.deleteOne(Number(id));
		res.send(data);
	};

	return {
		createNew,
		getOne,
		getAll,
		updateOne,
		deleteOne,
	};
};
