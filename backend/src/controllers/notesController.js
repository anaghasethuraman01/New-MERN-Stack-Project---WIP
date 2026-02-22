//import Note model
import Note from "../../models/Note.js";

export const getAllNotes = async (_, res) => { // _ added becoz req is not used in this fn (req,res)
	// res.status(200).send("You fetched the Notes");
	try {
		const notes = await Note.find().sort({ createdAt: -1 }); // sort by createdAt field (1 by default and -1 : newest first)
		res.status(200).json(notes);
	} catch (error) {
		console.log("Error in getAllNotes controller ", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const getNoteById = async (req, res) => {
	try {
		const findNote = await Note.findById(req.params.id);
		if (!findNote) return res.status(403).json({ message: "Cannot find note" });

		res.status(200).json(findNote);
	} catch (error) {
		console.log("Error in getNoteById controller ", error);
	}
};
export const createNote = async (req, res) => {
	//res.status(201).send("Note created successfully!");
	try {
		const { title, content } = req.body;
		const note = new Note({ title, content });
		const savedNote = await note.save();
		res.status(201).json(savedNote);
	} catch (error) {
		console.log("Error in createNote controller ", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const updateNote = async (req, res) => {
	//app.status(200).send("Note updated successfully!");
	try {
		const { title, content } = req.body;
		const updatedNote = await Note.findByIdAndUpdate(
			req.params.id,
			{
				title,
				content,
			},
			{
				new: true,
			},
		);

		if (!updatedNote)
			return res.status(404).json({ message: "Note not found" });

		res.status(200).json(updatedNote);
	} catch (error) {
		console.log("Error in updateNote controller ", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const deleteNote = async (req, res) => {
	//res.status(200).send("Note deleted successfully!");
	try {
		const deletedNote = await Note.findByIdAndDelete(req.params.id);
		if (!deletedNote)
			return res.status(404).json({ message: "Note not found" });

		res.status(200).json(deletedNote);
	} catch (error) {
		console.log("Error in deleteNote controller ", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};
