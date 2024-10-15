type HeaderProps = {
  setHeaderNavigation: React.Dispatch<React.SetStateAction<number>>;
};

export function Header({ setHeaderNavigation }: HeaderProps) {
  return (
    <header className="justify-between overflow-hidden bg-sky-900 p-6 px-4 py-2 text-center text-teal-600 sm:text-center lg:text-right">
      <button //"mx-auto px-4 py-2 text-center sm:text-left md:text-center "
        onClick={() => {
          //    <header className="flex items-center justify-between overflow-hidden bg-sky-900 p-6 text-teal-600">
          setHeaderNavigation(0);
        }}
        className="flex"
      >
        <span className="font-fantasy m-6 text-5xl">
          <a href="/Mainpage">Transferable skills</a>
        </span>
      </button>
      <ul>
        <li
          className="text-xl text-teal-600"
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
