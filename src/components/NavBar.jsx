import { LogIn, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-lime-500 sticky top-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="text-xl text-zinc-900 font-bold">Site Logo</h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                to="/create-account"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
              >
                <PlusCircle className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Create Account
              </Link>
              <Link
                to="/login"
                className="ml-2 relative inline-flex items-center gap-x-1.5 rounded-md bg-lime-50  px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
              >
                <LogIn className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
