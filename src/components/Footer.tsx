import Mylogo from "../assets/CvLogo.png";

export function Footer() {
  return (
    <div>
      <hr />
      <footer className="overscroll-none bg-white pb-4">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center sm:justify-start">
              <a href="https://codevessel.org">
                <img
                  className="rounded-full"
                  src={Mylogo}
                  width="50"
                  height="50"
                />
              </a>
            </div>
            <p className="mt-4 text-center text-sm text-teal-300 lg:mt-0 lg:text-right">
              T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
