import { useState } from "react";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello</h1>
        <Footer />
      </div>
    </>
  );
}

export default App;
