import express, { NextFunction, Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import connectDb from "./config/db-connection";
import { config } from "./config/config";
import dotenv from "dotenv";

dotenv.config();

const options = {
	failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Project NLEX",
			version: "1.0.0",
		},
	},
	apis: ["./app/**/*.router.ts"],
};

const openapiSpecification = swaggerJSDoc(options);

// Create an Express application
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Load Routes
const template = require("./app/template")();
app.use(config.baseApiPath, template);

// Create an HTTP server
const httpServer = createServer(app);

const io = new Server(httpServer);

// Attach the Socket.IO server to the request object
app.use((req: Request, _res: Response, next: NextFunction) => {
	(req as any).io = io;
	next();
});

// Start the server and listen on the specified port with the database connection
connectDb()
	.then(() => {
		httpServer.listen(config.port, () => {
			console.log(`Listening to ${config.port}...`);
			// you can call here you cron job function
		});
	})
	.catch((error) => {
		console.error("Connection failed!", error);
	});

// Start server without database connection
// httpServer.listen(config.port, () => {
// 	console.log(`Listening to ${config.port} without database connection...`);
// });
