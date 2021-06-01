import React, { useEffect, useState } from "react";
import "./../App.css";

import uuid from "react-uuid";
import ReactMarkdown from "react-markdown";

import { Background, ModalWrapper, ModalHeader, ModalBody } from "./ModalStyle";

import useNotes from "./../context/NoteContext";

import {
  AiOutlineArrowLeft,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineSave,
} from "react-icons/ai";

const NoteModal = (props) => {
  const { id, addNote, toggleModal } = props;

  const { add, get, remove, save } = useNotes();
  const [editing, setEditing] = useState(false);
  const toggleEdit = () => setEditing(!editing);

  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    const note = get({ id });
    if (note?.source) {
      setTextValue(note.source);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (addNote) {
      setTextValue("");
      setEditing(true);
    }
  }, [addNote]);

  const modalClose = () => {
    if (addNote) {
      if (textValue.length === 0) {
        toggleModal();
        return null;
      }
      add({
        id: uuid(),
        source: textValue,
      });
    } else {
      save({
        id,
        source: textValue,
      });
    }
    toggleModal();
  };
  const textChange = (textchange) => {
    setTextValue(textchange.target.value);
  };

  const deleteNote = () => {
    remove({ id });
    toggleModal();
  };

  return (
    <Background>
      <ModalWrapper>
        <ModalHeader>
          <div className="icons-style">
            <AiOutlineArrowLeft onClick={modalClose} size={25} />
            <div className="delete">
              <AiOutlineDelete onClick={deleteNote} size={25} />
            </div>
            <div className="save-edit">
              {editing ? (
                <AiOutlineSave onClick={toggleEdit} size={25} />
              ) : (
                <AiOutlineEdit onClick={toggleEdit} size={25} />
              )}
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          {editing ? (
            <textarea
              className="textarea"
              onChange={textChange}
              value={textValue}
              autoFocus
            />
          ) : (
            <ReactMarkdown className="markdown-style">
              {textValue}
            </ReactMarkdown>
          )}
        </ModalBody>
      </ModalWrapper>
    </Background>
  );
};

export default NoteModal;
