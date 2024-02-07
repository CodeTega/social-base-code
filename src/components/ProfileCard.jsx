import React, { useState } from "react";

export default function ProfileCard() {
  const [status, setStatus] = useState("Please update your status.");
  const [update, setUpdate] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg bg-gray-100 shadow">
      <div
        className="relative bg-center bg-no-repeat bg-cover rounded-t-lg"
        style={{
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg)`,
          height: "100px",
        }}
      >
        <div className="flex flex-wrap justify-center ">
          <div className="mx-auto mt-4 mb-4 w-24 h-24 object-center rounded-lg shadow-lg bg-white">
            <img
              className="rounded-lg bg-zinc-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="px-4">
        <p className="text-xl font-bold mt-10 text-center">Username</p>
        <p className="text-sm text-center">email@email.com</p>
        {update ? (
          <>
            <textarea
              className="w-96 mt-4 border rounded-md bg-white mx-4 "
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </>
        ) : (
          <div className="flex justify-center mt-4 border rounded-md bg-white mx-4 p-12">
            <div>{status}</div>
          </div>
        )}

        <div className="flex px-4">
          <button className="ml-auto text-blue-500 hover:blue-700"
          onClick={() => setUpdate(!update)}
          >
           {update ? "Save" : "Update"} Status
          </button>
        </div>
        <div className="text-center pb-12 w-full">
          <div className="grid grid-cols-3 divide-x divide-emerald-500 mt-4 ">
            <div className="text-md">
              <div className="font-bold">0</div> <div>Posts</div>
            </div>
            <div>
              <div className="font-bold">0</div> <div>Connections</div>
            </div>
            <div>
              <div className="font-bold">0</div> <div>Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
