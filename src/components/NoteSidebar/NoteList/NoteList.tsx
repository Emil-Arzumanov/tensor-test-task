import { notes } from "date";
import styles from "./NoteList.module.css";
import { NoteListElement } from "components/shared/NoteListElement";

interface INote {
  readonly id: number,
  readonly heading: string,
  readonly date: Date,
  readonly text: string,
};

export function NoteList() {
    return (
        <div className={styles.list}>
            { notes.map((note: INote) => <NoteListElement note={note}/>) }
        </div>
    );
};