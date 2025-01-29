import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = date.current.value;

    // Validation
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      // Show modal if validation fails
      modal.current.open();
      return;
    }

    // Call onAdd with new project data
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    // Clear input fields after saving
    title.current.value = "";
    description.current.value = "";
    date.current.value = "";
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold">Invalid Input</h2>
        <p className="mt-2">Oops ... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>

      <div className="w-[35rem]">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  );
}
