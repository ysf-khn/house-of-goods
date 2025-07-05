"use client";
import React from "react";

export default function Details({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
      >
        {title}
        <span>{open ? "-" : "+"}</span>
      </button>
      {open && <div className="pb-4 text-gray-600 text-sm">{content}</div>}
    </div>
  );
}
