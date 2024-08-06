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
        <span className="m-6 text-4xl font-semibold dark:text-white">
          <a href="/Mainpage">Code Vessel Blog</a>
        </span>
      </button>
      <ul>
        <li
          className="text-white"
          onClick={() => {
            setHeaderNavigation(0);
          }}
        >
          <a href="/Mainpage">Home</a>
        </li>
      </ul>
    </header>
  );
}
