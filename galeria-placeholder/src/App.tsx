import React from "react";
import { Routes } from "./routes/Routes";

function App() {
  return (
    <div>
      <header>
        <h1>Galeria de fotos</h1>
      </header>
      <hr />
      <main>
        <Routes />
      </main>
      <footer>
        <hr />
        <p>Created by: cavalcante</p>
      </footer>
    </div>
  );
}

export default App;
