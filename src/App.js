import "./styles.css";
import "./app.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavigationBar from "./navigationBar.js";
import { Container } from "@material-ui/core";
import GridLayout from "./GridLayout.js";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavigationBar />
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
      <Footer />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
