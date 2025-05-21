import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>React Weather App</h1>
        <Weather defaultCity="Sydney" />
        <Footer />
      </div>
    </>
  );
}

export default App;
