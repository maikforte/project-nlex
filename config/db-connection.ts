import mongoose from "mongoose";
import { config } from "./config";

const connectDb = async (): Promise<typeof mongoose> => {
	try {
		const MONGODB_URI: string|undefined = config.mongoDbUri;
		console.log(MONGODB_URI);
		if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined");
		const mongoDb = await mongoose.connect(MONGODB_URI);
		console.log(
			`Database connected: ${mongoDb.connection.host}, ${mongoDb.connection.name}`
		);
		return mongoDb;
	} catch (error) {
		console.error("Database connection failed!", error);
		process.exit(1);
	}
};

export default connectDb;
