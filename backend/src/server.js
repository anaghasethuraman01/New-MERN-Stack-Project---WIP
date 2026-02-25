import express from "express";
// const express = require('express') --   "type": "module", in package.json
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path"; // for deployment
import cors from "cors";
dotenv.config(); // to use env files
const app = express();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve(); // for deployment

//use middleware
// only needed in development and not in production
if (process.env.NODE_ENV !== "production") {
	app.use(
		cors({
			origin: "http://localhost:5173",
		}),
	);
}

app.use(express.json()); //this middleware will pares JSON bodies : req. body
app.use(rateLimiter); // adding rateLimiter
//our simple custom middleware - adding console.log before sending response
// app.use((req, res, next) => {
// 	console.log(`Request method is ${req.method} & Req URL is ${req.url}`);
// 	next();
// });

//routes
app.use("/api/notes", notesRoutes);

//for deployment
// do this only in production or deployed
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/dist"))); // serve as static assets
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
	});
}

// connection to DB and only listen when database is connected
connectDB().then(() => {
	app.listen(PORT, () => {
		console.log("Server started on port: ", PORT);
	});
});

//now moved to notesRoutes.js
// app.get("/api/notes", (req, res) => {
// 	res.status(200).send("You got 23 Notes");
// });

// app.post("/api/notes", (req, res) => {
// 	app.status(201).json({ message: "Note created successfully!" });
// });

// app.put("/api/notes/:id", (req, res) => {
// 	app.status(200).json({ message: "Note updated successfully!" });
// });

// app.delete("/api/notes/:id", (req, res) => {
// 	app.status(200).json({ message: "Note deleted successfully!" });
// });
