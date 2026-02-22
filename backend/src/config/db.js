// connect to db

import moongoose from "mongoose";

export const connectDB = async () => {
	// call this in server.js
	try {
		await moongoose.connect(process.env.MONGO_URI);
		console.log("Mongo DB connected successfully !");
	} catch (error) {
		console.log("Error connecting to MongoDB", error);
		process.exit(1); // exit in case of error
		// 1 - means exit with failure
		// 0 - success
	}
};
