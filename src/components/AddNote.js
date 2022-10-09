import React from "react";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="flex flex-col justify-between rounded-md p-4 min-h-170 bg-darkMain text-darkText">
      <textarea
        placeholder="Type to add a note..."
        cols="10"
        rows="8"
        className="border-none resize-none bg-darkMain text-darkText focus:outline-none"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="flex align-middle justify-between">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button
          className="bg-darkSecondary rounded-md border-none pt-1 pr-2 pb-1 pl-2 hover:scale-110 transition duration-150 ease-in-out active:scale-90 active:bg-tertiaryLight"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
