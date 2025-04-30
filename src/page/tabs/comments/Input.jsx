import React from "react";
import { useState } from "react";
export default function Input() {
  const [newComment, setNewComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle new message submission here
    setNewComment("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a comment"
          className="w-full px-4 py-[14px] border border-[#C0C0C0] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </form>
    </div>
  );
}
