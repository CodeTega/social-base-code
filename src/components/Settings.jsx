import React from "react";

export default function Settings() {
  return (
    <div className="overflow-hidden rounded-lg bg-zinc-100 mt-4 shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Account Information
        </h3>
        <div className="mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Username</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                username
              </dd>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-1">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Update
                </button>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                email@email.com
              </dd>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-1">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Update
                </button>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Password</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2  blur-sm">
                *************
              </dd>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-1">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Update
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
