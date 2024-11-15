import express, { Router } from "express";
import { controller } from "./template.controller";
import { router } from "./template.router";

module.exports = (): Router => {
	return router(express.Router(), controller());
};
