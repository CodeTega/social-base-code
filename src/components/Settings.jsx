import React, { useState } from "react";

export default function Settings() {
  const [username, setUsername] = useState("username");
  const [email, setEmail] = useState("email@email.com");
  const [password, setPassword] = useState("*************");
  const [updateUserName, setUpdateUserName] = useState(false);
  const [updateEmail, setUpdateEmail] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);

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
              {updateUserName ? (
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 text-sm text-gray-900 sm:col-span-2"
                />
              ) : (
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  {username}
                </dd>
              )}
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-1">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => setUpdateUserName(!updateUserName)}
                >
                  {updateUserName ? "Save" : "Update"}
                </button>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              {updateEmail ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 text-sm text-gray-900 sm:col-span-2"
                />
              ) : (
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  {email}
                </dd>
              )}
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-1">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => setUpdateEmail(!updateEmail)}
                >
                  {updateEmail ? "Save" : "Update"}
                </button>
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Password</dt>
              {updatePassword ? (
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 text-sm text-gray-900 sm:col-span-2"
                />
              ) : (
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2  blur-sm">
                  {password}
                </dd>
              )}

              <dd className="mt-1 text-sm text-gray-900 sm:col-span-1">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => setUpdatePassword(!updatePassword)}
                >
                  {" "}
                  {updatePassword ? "Save" : "Update"}
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
