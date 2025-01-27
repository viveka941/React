import React from "react";
import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem]">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md">Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
