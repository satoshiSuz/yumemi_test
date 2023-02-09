import React from "react";
import { Header } from "./pages/Header";
import { Home } from "./pages/Home";
import { PrefecturesProvider } from "./prividers/PrefecturesContext";

function App() {
	return (
		<PrefecturesProvider>
			<Header />
			<Home />
		</PrefecturesProvider>
	);
}

export default App;
