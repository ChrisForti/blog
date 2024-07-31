import "./index.css";
import { Mainpage } from "./components/Mainpage";
import { Header } from "./components/Header";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <Mainpage />
      </div>
    </>
  );
}
