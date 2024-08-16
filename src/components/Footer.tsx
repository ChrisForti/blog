import Mylogo from "../assets/CvLogo.png";

export function Footer() {
  return (
    <div>
      <hr className="text-white" />
      <footer className="overscroll-none bg-gray-900 pb-4">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <img
                className="rounded-full"
                src={Mylogo}
                width="40"
                height="40"
              />
            </div>
            <p className="mt-4 text-center text-sm text-gray-400 lg:mt-0 lg:text-right">
              T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
