require("dotenv").config();

export const config = {
	port: 3000,
	mongoDbUri: process.env.MONGODB_URI,
	baseApiPath: "/api",
};
