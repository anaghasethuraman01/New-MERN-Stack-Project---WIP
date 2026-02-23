import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
//import toast from "react-hot-toast";

const App = () => {
	return (
		<div>
			<div className="relative h-full w-full"></div>
			{/* <div data-theme="forest" /> {/* setting theme - daisyUI-forest*/}
			<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
			{/* tailwind.css with  daisyui  */}
			{/* <button className="btn btn-primary">Click Me!</button>*/}
			{/* tailwind.css without daisyui  */}
			{/* <button
				className="text-red-500 p-4 bg-pink-300"
				onClick={() => toast.success("Congratulations")}
			>
				Click Me!
			</button> */}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/create" element={<CreatePage />} />
				<Route path="/note/:id" element={<NoteDetailPage />} />
			</Routes>
		</div>
	);
};

export default App;
