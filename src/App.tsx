import { useState } from "react";
import "./index.css";
import { Mainpage } from "./components/Mainpage";
import { Header } from "./components/Header";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-black">
        <Header />
        <Mainpage />
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}
