import React, { useContext } from "react";
import "./../App.css";
import { NotesContext } from "./../context/NoteContext";
import NoteDetails from "./NoteDetails";

const NotesList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <li className="notes-list">
      <NoteDetails addNote={true} />
      {notes.map((note) => (
        <NoteDetails key={note.id} id={note.id} source={note.source} />
      ))}
    </li>
  );
};

export default NotesList;
