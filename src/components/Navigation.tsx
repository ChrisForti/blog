// import { useState } from "react";

export function Navigation() {
  // const [isOpen, setIsOpen] = useState(false);

  // const menuToggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <nav className="border-gray-200 bg-white px-4 py-2.5 shadow sm:px-4 dark:border-gray-700 dark:bg-gray-800">
      <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <li>
            <a
              href="#"
              className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
