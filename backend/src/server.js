import express from "express";
// const express = require('express') --   "type": "module", in package.json
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config(); // to use env files
const app = express();

const PORT = process.env.PORT || 5001;

//use middleware
app.use(express.json()); //this middleware will pares JSON bodies : req. body
app.use(rateLimiter); // adding rateLimiter
//our simple custom middleware - adding console.log before sending response
// app.use((req, res, next) => {
// 	console.log(`Request method is ${req.method} & Req URL is ${req.url}`);
// 	next();
// });

//routes
app.use("/api/notes", notesRoutes);

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
