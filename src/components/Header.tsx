import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="p-6container relative isolate mx-auto flex flex-wrap items-center justify-between overflow-hidden bg-gray-900">
      <a className="flex items-center">
        <span className="whitespace-nowrap text-4xl font-semibold dark:text-white">
          Code Vessel
        </span>
        <span className="m-6 text-4xl font-semibold dark:text-white">Blog</span>
      </a>
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
