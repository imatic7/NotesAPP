import React, { createContext, useState, useEffect, useMemo } from "react";
import { useContext } from "react";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const storedNotes = useMemo(() => notes, [notes]);

  useEffect(() => {
    const localStorageNotes = JSON.parse(localStorage.getItem("notes"));
    if (localStorageNotes && localStorageNotes.notes) {
      setNotes(localStorageNotes.notes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify({ notes: storedNotes }));
  }, [storedNotes]);

  return (
    <NotesContext.Provider value={{ notes: storedNotes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => {
  const { notes, setNotes } = useContext(NotesContext);

  const add = ({ id, source }) => {
    setNotes([...notes, { id, source }]);
  };
  const get = ({ id }) => notes.find((note) => note.id === id);

  const remove = ({ id }) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const save = ({ id, source }) => {
    const newNote = notes.map((note) =>
      note.id === id ? { ...note, source } : note
    );

    setNotes(newNote);
  };

  return {
    add,
    get,
    remove,
    save,
  };
};

export { NotesContext, NotesProvider };
export default useNotes;
