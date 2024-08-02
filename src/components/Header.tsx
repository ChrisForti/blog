import { useState } from "react";
import { Navigation } from "./Navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="p-6container relative isolate mx-auto flex flex-wrap items-center justify-between overflow-hidden bg-gray-900">
      <a href="/" className="flex items-center">
        <span className="whitespace-nowrap text-4xl font-semibold dark:text-white">
          Code Vessel
        </span>
        <span className="m-6 self-center whitespace-nowrap text-4xl font-semibold dark:text-white">
          Blog
        </span>
      </a>{" "}
      <button
        onClick={menuToggle}
        type="button"
        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open main menu</span>
        {/* <!-- Hamburger icon --> */}
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
      <div>
        <nav className="flex items-center">
          <ul className="hidden items-center space-x-4 sm:flex">
            <li>
              <a
                href="#"
                className="text-md from-indigo-600 to-green-600 hover:text-indigo-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-md from-indigo-600 to-green-600 hover:text-indigo-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-md from-indigo-600 to-green-600 hover:text-indigo-600"
              >
                Posts
              </a>
            </li>
          </ul>

          <div className="ml-8 hidden items-center space-x-4 md:flex lg:ml-12"></div>
        </nav>
      </div>
      <Navigation />
    </header>
  );
}

//     <script>
//       const menuToggle = document.getElementById('menu-toggle');
// const mobileMenu = document.getElementById('mobile-menu');

// menuToggle.addEventListener('click', function () {
//   mobileMenu.classList.toggle('hidden');
// });
//     </script>
