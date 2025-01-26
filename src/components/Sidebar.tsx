import { useState } from "react";
import { PostData, data } from "../posts/posts";
import { v4 as uuidv4 } from "uuid";

type SidebarProps = {
  setSelectedPost: React.Dispatch<React.SetStateAction<number>>;
};

export function Sidebar({ setSelectedPost }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [] = useState(data);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function selectPost(selection: number) {
    setSelectedPost(selection);
  }

  const filterPostsBySearchTerm = (
    data: PostData[],
    searchTerm: string,
  ): PostData[] => {
    if (!searchTerm || searchTerm.trim() === "") {
      return data;
    }
    // Ensure the search term is a string and not empty.

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return data.filter(
      (post) =>
        post.title && post.title.toLowerCase().includes(lowercasedSearchTerm),
    );
  };

  function applyFilter(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-sky-900">
      <button
        className="absolute top-20 bg-clip-text p-2 text-teal-500 md:hidden"
        onClick={toggleSidebar}
      >
        Sidebar
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
            onChange={(event) => setSearchTerm(event.target.value)}
          />{" "}
          <button
            onClick={applyFilter}
            className="ml-2 rounded-md bg-teal-500 p-2 text-white"
          >
            Filter
          </button>
        </div>
        <div className="rounded-md bg-white">
          <h1 className="my-4 cursor-pointer rounded-md border-b-2 bg-teal-500 py-2 text-center text-xl text-gray-600">
            Posts
          </h1>
          <div className="list-none rounded-md bg-white text-center">
            {filterPostsBySearchTerm(data, searchTerm).map(
              ({ title }, index) => {
                const postNumber = index + 1;
                return (
                  <li
                    key={uuidv4()}
                    className="text-1xl border-b-2 bg-clip-text py-3 font-bold text-teal-500 hover:cursor-pointer"
                    onClick={() => {
                      selectPost(postNumber);
                    }}
                  >
                    Post {postNumber}:{title}
                  </li>
                );
              },
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
