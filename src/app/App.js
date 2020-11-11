import React, { useState, useEffect } from "react";
import MenuAppBar from "./components/menuAppBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function App() {
	return (
		<>
			<MenuAppBar />
			<Container>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="textPrimary"
					gutterBottom
				>
					TEMPLATE APP CONTENT
				</Typography>
			</Container>
		</>
	);
}

export default App;
