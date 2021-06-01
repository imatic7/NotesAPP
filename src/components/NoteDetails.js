import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import NoteModal from "./NoteModal";

const NoteDetails = (props) => {
  const { id, source, addNote } = props;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      {showModal ? (
        <NoteModal toggleModal={toggleModal} id={id} addNote={addNote} />
      ) : null}
      <div onClick={toggleModal} id={id} className="one-note-container">
        {addNote ? (
          <div className="add-note-btn">+</div>
        ) : (
          <ReactMarkdown className="markdown-style">{source}</ReactMarkdown>
        )}
      </div>
    </>
  );
};

export default NoteDetails;
