import { useState } from "react";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-black">
        <h1 className="">Blog</h1>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}
