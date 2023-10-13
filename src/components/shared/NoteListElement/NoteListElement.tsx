import { FC } from "react";
import styles from "./NoteListElement.module.css";
import { Button } from "../Button";
import { Note } from "types/models/NoteList";

interface ListElementProps {
  readonly note: Note,
};

export const NoteListElement: FC<ListElementProps> = ({note}) => {
  return (
    <div key={note.id} className={styles.listElement}>
      <h4>{note.heading}</h4>
      <p>
        {
          note.date.toLocaleDateString('ru-ru', { 
            year:"numeric",
            month:"short",
            day:"numeric"
          })
        }
      </p>
      <div className={styles.deleteButton}>
        <Button actionFunction={() => {alert(`Element ${note.id}`)}} buttonText="Удалить"/>
      </div>
    </div>
  )
};
