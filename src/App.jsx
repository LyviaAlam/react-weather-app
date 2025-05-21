import { useState } from "react";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello</h1>
        <button class="btn btn-primary">Try button</button>
        <h1>
          Example heading <span class="badge text-bg-secondary">New</span>
        </h1>
        <Footer />
      </div>
    </>
  );
}

export default App;
