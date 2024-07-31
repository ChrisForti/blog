import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="relative isolate overflow-hidden bg-gray-900 p-6">
      export function Header()
      <header className="bg-black">
        <div className="container mx-auto flex items-center justify-between px-10 py-6">
          <div>
            <h1 className="bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-4xl font-bold text-transparent hover:cursor-pointer">
              React Blog
            </h1>
          </div>
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
      </header>
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
