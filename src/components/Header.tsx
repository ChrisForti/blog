type HeaderProps = {
  setHeaderNavigation: React.Dispatch<React.SetStateAction<number>>;
};

export function Header({ setHeaderNavigation }: HeaderProps) {
  return (
    <header className="flex items-center justify-between overflow-hidden bg-gray-900 p-5">
      <button
        onClick={() => {
          setHeaderNavigation(0);
        }}
        className="flex items-center"
      >
        <span className="m-6 text-4xl font-semibold dark:text-teal-600">
          <a href="/Mainpage">Transferable skills</a>
        </span>
      </button>
      <ul>
        <li
          className="text-teal-600"
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
