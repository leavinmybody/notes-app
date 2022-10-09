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
    <div className="flex flex-col justify-between p-4 rounded-md min-h-170 bg-darkMain text-darkText">
      <textarea
        placeholder="Type to add a note..."
        cols="10"
        rows="8"
        className="border-none resize-none bg-darkMain text-darkText focus:outline-none"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="flex justify-between align-middle">
        <small>( {characterLimit - noteText.length} )</small>
        <button
          className="pt-1 pb-1 pl-2 pr-2 transition duration-150 ease-in-out border-none rounded-md bg-darkSecondary hover:scale-110 active:scale-90 active:bg-tertiaryLight"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
