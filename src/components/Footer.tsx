import Mylogo from "../assets/CvLogo.png";

export function Footer() {
  return (
    <div>
      <footer className="overscroll-none bg-sky-900 pb-4">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center sm:justify-start">
              <a href="https://codevessel.org">
                <img
                  className="rounded-full"
                  src={Mylogo}
                  width="60"
                  height="60"
                />
              </a>
            </div>
            <p className="text-medium mb-3 mt-4 text-center text-teal-300 lg:mt-0 lg:text-right">
              T&C &nbsp; Code vessel &nbsp; Developers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
