import React from "react";

export default function ChatDirectory() {
  const directory = {};
  
  return (
    <div className="bg-white fixed w-full bottom-0 ">
      <nav className="h-screen pt-16 overflow-y-auto" aria-label="Directory">
        {Object.keys(directory).map((letter) => (
          <div key={letter} className="relative">
            <div className="sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-50 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900">
              <h3>{letter}</h3>
            </div>
            <ul className="divide-y divide-gray-100">
              {directory[letter].map((person) => (
                <li key={person.email} className="flex gap-x-4 px-3 py-5">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.email}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
