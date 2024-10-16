import { useState } from "react";
import { data } from "../posts/posts";
import { v4 as uuidv4 } from "uuid";

type SidebarProps = {
  setSelectedPost: React.Dispatch<React.SetStateAction<number>>;
};

export function Sidebar({ setSelectedPost }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function selectPost(selection: number) {
    setSelectedPost(selection);
  }

  // const filterPostsBySearchTerm = (
  //   data: PostData[],
  //   searchTerm: string,
  // ): PostData[] => {
  //   // Ensure the search term is a string and not empty.
  //   const lowercasedSearchTerm = searchTerm.toLowerCase();
  //   return data.filter((post) =>
  //     post.title.toLowerCase().includes(lowercasedSearchTerm),
  //   );
  // };

  return (
    <div className="bg-sky-900">
      <button
        className="absolute top-20 bg-clip-text p-2 text-teal-500 md:hidden"
        onClick={toggleSidebar}
      >
        Sidebar
        {/* <svg
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
        </svg> */}
      </button>
      <aside
        className={
          (isOpen ? "block" : "hidden") +
          " top-22 absolute left-0 z-50 w-64 bg-sky-900 p-2 text-white md:static md:block"
        }
      >
        <div className="mx-auto flex items-center justify-around rounded-lg px-1">
          <input
            type="text"
            placeholder="Search by Tag, or Title"
            className="w-full rounded-md bg-gray-500 p-2 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="rounded-md bg-white">
          <h1 className="my-4 cursor-pointer rounded-md border-b-2 bg-teal-500 py-2 text-center text-xl text-gray-600">
            Posts
          </h1>
          <div className="list-none rounded-md bg-white text-center">
            {data.map((_, index) => {
              const postNumber = index + 1;
              return (
                <li
                  key={uuidv4()}
                  className="text-1xl border-b-2 bg-clip-text py-3 font-bold text-teal-500 hover:cursor-pointer"
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
    </div>
  );
}
