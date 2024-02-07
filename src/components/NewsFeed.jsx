import { Send } from "lucide-react";
import React from "react";

export default function NewsFeed() {
  const posts = [
    {
      id: 1,
      user: {
        userName: "Username",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      body: "Check out this cool photo I took last weekend",
      comments: 12,
      likes: 5,
    },
    {
      id: 2,
      user: {
        userName: "Username",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      body: "Check out this cool photo I took last weekend",
      comments: 0,
      likes: 15,
    },
    {
      id: 3,
      user: {
        userName: "Username",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      body: "Check out this cool photo I took last weekend",
      comments: 1,
      likes: 2,
    },
    // More posts...
  ];
  return (
    <div className="mt-4 grid gap-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="overflow-hidden rounded-lg bg-white shadow"
        >
          <div className="px-4 py-5 sm:p-6 relative">
            <div className="mr-4 flex-shrink-0 absolute top-6 left-2">
              <img
                className="h-12 w-12 rounded-lg"
                src={post.user.imageUrl}
                alt=""
              />
            </div>
            <div className="flex">
              <div className="w-full">
                <h4 className="text-lg font-bold pl-10">
                  {post.user.userName}
                </h4>
                <p className="text-sm text-gray-500 pl-10">3 hours ago</p>
                <p className="mt-4">{post.body}</p>
                <div className="mt-4 flex items-center justify-between space-x-4">
                  <div className="text-sm font-semibold text-gray-900">
                    {post.likes} Likes
                  </div>
                  <button className="text-sm font-semibold text-gray-900">
                    {post.comments} Comments
                  </button>
                </div>
                <div className="relative mt-4">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                </div>

                <div className=" flex items-center justify-between space-x-4 py-1">
                  <button className="text-sm font-semibold py-2 rounded-md text-gray-900 w-full hover:bg-zinc-200">
                    Like
                  </button>
                  <button className="text-sm font-semibold py-2 rounded-md text-gray-900 w-full hover:bg-zinc-200">
                    Comment
                  </button>
                </div>
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-8 w-8" />
                  <input type="textarea" className="w-full ml-2 border-none bg-gray-100 rounded-full p-2 pl-4" placeholder="Write a comment..." />
                  <Send className="h-6 w-6 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
