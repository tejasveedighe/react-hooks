import React from "react";
import "./App.css";

type Operation = "multiply" | "add" | "divide";

const greet = (name: string, age: number): string => {
	return `Happy Birthday ${name}, you are now ${age} years old!`;
};

function App() {
	return <div className="App">{greet("Tejasvee Dighe", 22)}</div>;
}

export default App;
