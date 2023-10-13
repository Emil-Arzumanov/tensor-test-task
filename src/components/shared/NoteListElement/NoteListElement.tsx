import { FC } from "react";
import styles from "./NoteListElement.module.css";
import { Button } from "../Button";
import { Note } from "types/models/NoteList";
import { NotesService } from "services/notesService";
import { useGlobalContext } from "hooks/useGlobalContext";

interface ListElementProps {
  readonly note: Note,
};

export const NoteListElement: FC<ListElementProps> = ({note}) => {
  const { 
    setNotes, 
    setNote,
    setCreateMode,
    setEditMode,
  } = useGlobalContext();

  return (
    <div 
      key={note.id} 
      className={styles.listElement}
      onClick={() => {
        setEditMode(false);
        setCreateMode(false);
        setNote(NotesService.getNoteById(note.id));
      }}
    >
      <h4>{note.heading}</h4>
      <p>
        {
          note.date.toLocaleDateString('ru-ru', { 
            year:"numeric",
            month:"short",
            day:"numeric",
          })
        }
      </p>
      <div className={styles.deleteButton}>
        <Button actionFunction={() => {
          NotesService.deleteNote(note.id);
          setNotes(NotesService.getNotes());
        }} buttonText="Удалить"/>
      </div>
    </div>
  )
};
