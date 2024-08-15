import "./index.css";
import { Mainpage } from "./components/Mainpage";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";
import { Footer } from "./components/Footer";

export default function App() {
  const [selectedPost, setSelectedPost] = useState(0);

  return (
    <>
      <div>
        <Header setHeaderNavigation={setSelectedPost} />
        <div className="flex">
          <Sidebar setSelectedPost={setSelectedPost} />
          <Mainpage selectedPost={selectedPost} />
        </div>
        <Footer />
      </div>
    </>
  );
}
