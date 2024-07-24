import { useState } from "react";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full bg-slate-200 dark:bg-slate-900">
        <h1 className="text-black">Blog</h1>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}
