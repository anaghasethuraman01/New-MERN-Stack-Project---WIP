import express from "express";
import {
	createNote,
	deleteNote,
	getAllNotes,
	getNoteById,
	updateNote,
} from "../controllers/notesController.js";
const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

//move the (req,res) part to notesController.js
// router.get("/", (req, res) => {
// 	res.status(200).send("You fetched the Notes");
// });

// router.post("/", (req, res) => {
// 	res.status(201).send("Note created successfully!");
// });

// router.put("/:id", (req, res) => {
// 	app.status(200).send("Note updated successfully!");
// });

// router.delete("/:id", (req, res) => {
// 	res.status(200).send("Note deleted successfully!");
// });

export default router;
