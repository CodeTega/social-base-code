import React from "react";
import ProfileCard from "./ProfileCard";
import Settings from "./Settings";
import PostCard from "./PostCard";
import NewsFeed from "./NewsFeed";
import ChatDirectory from "./ChatDirectory";

export default function Main() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <div>
          <ProfileCard />
          <Settings />
        </div>
      </div>
      <div className="col-span-7">
        <div>
          <PostCard />
          <NewsFeed />
        </div>
      </div>
      <div className="col-span-2">
        <ChatDirectory />
      </div>
    </div>
  );
}
