import { ArrowLeft, MessageCircle, PlusCircleIcon } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link to="/" className="text-white flex items-center pb-8">
        <ArrowLeft className="h-5 w-5 text-white" /> Go Back
      </Link>
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
          <div className="flex justify-center mt-4 border rounded-md bg-white mx-4 p-12">
            <div>
              Your status goes here, its limited to 120 characters. This is a
              test of what it would look like
            </div>
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
      <div className="mt-4 flex items-center gap-x-4">
        <button
          type="button"
          className="rounded-md w-full bg-lime-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 flex justify-center items-center"
        >
          <PlusCircleIcon className="h-5 w-5 mr-1" />
          Add Friend
        </button>
        <button
          type="button"
          className="rounded-md w-full bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 flex justify-center items-center"
        >
          <MessageCircle className="h-5 w-5 mr-1" />
          Message
        </button>
      </div>
    </div>
  );
}
