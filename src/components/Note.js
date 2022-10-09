import React from "react";
import { UilTrash } from "@iconscout/react-unicons";
const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="flex flex-col justify-between bg-darkSecondary rounded-md p-4 min-h-170 shadow-md">
      <span className="whitespace-pre-wrap">{text}</span>
      <div className="flex align-middle justify-between">
        <small className="hover:text-darkMain">{date}</small>
        <UilTrash
          size="1em"
          onClick={() => handleDeleteNote(id)}
          className="cursor-pointer hover:scale-110 transition duration-150 ease-in-out active:scale-90"
        />
      </div>
    </div>
  );
};

export default Note;
