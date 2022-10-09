import React from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    return savedNotes || [];
  });

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    console.log(notes);
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // const editNote = (id, newText) => {
  //   const newNotes = [...notes];
  //   const note = newNotes.find((note) => note.id === id);
  //   note.text = newText;
  //   setNotes(newNotes);

  return (
    <div className="max-w-4xl mr-auto ml-auto pr-4 pl-4 text-darkText ">
      <div>
        <Header />
        <Search handleSearchNote={setSearchText} />
      </div>
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
