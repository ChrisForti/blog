import { useState } from "react";
import { data } from "../content/content";
import { v4 as uuidv4 } from "uuid";

type SidebarProps = {
  setSelectedPost: React.Dispatch<React.SetStateAction<number>>;
};

export function Sidebar({ setSelectedPost }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function selectPost(selection: number) {
    setSelectedPost(selection);
  }
  return (
    <>
      <button
        className="rounded-m absolute right-20 top-12 border-black bg-white bg-clip-text p-2 font-bold text-white md:hidden"
        onClick={toggleSidebar}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <aside
        className={
          (isOpen ? "block" : "hidden") +
          " top-22 absolute left-0 z-50 w-64 bg-white p-4 text-white md:static md:block"
        }
      >
        <div className="mx-auto flex items-center justify-around rounded-lg bg-white px-1">
          <input
            type="text"
            placeholder="seach"
            className="w-full rounded-md bg-gray-100 p-2 outline-none ring-indigo-700"
          />
        </div>
        <div className="rounded-md bg-white">
          <h1 className="my-4 cursor-pointer rounded-md border-b-2 bg-white py-2 text-center text-xl text-gray-600">
            Posts
          </h1>
          <div className="list-none rounded-md bg-white text-center">
            {data.map((_, index) => {
              const postNumber = index + 1;
              return (
                <li
                  key={uuidv4()}
                  className="text-1xl border-b-2 bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text py-3 font-bold text-transparent hover:cursor-pointer"
                  onClick={() => {
                    selectPost(postNumber);
                  }}
                >
                  Post {postNumber}
                </li>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
