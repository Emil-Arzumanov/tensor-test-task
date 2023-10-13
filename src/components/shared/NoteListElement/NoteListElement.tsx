import { FC } from "react";
import styles from "./NoteListElement.module.css";
import { Button } from "../Button";

interface INote {
  readonly id: number,
  readonly heading: string,
  readonly date: Date,
  readonly text: string,
};

interface ListElementProps {
  readonly note: INote,
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
