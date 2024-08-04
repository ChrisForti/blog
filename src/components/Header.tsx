import { Navigation } from "./Navigation";

type HeaderProps = {
  setHeaderNavigation: React.Dispatch<React.SetStateAction<number>>;
};

export function Header({ setHeaderNavigation }: HeaderProps) {
  return (
    <header className="p-5container relative mx-auto flex flex-wrap items-center justify-between overflow-hidden bg-gray-900">
      <button
        onClick={() => {
          setHeaderNavigation(0);
        }}
        className="flex items-center"
      >
        <span className="m-6 whitespace-nowrap text-4xl font-semibold dark:text-white">
          Code Vessel Blog
        </span>
      </button>
      <Navigation setSelectedPost={setSelectedPost} />
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
