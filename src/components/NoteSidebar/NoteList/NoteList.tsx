import { notes } from "date";
import styles from "./NoteList.module.css";
import { NoteListElement } from "components/shared/NoteListElement";
import { Note } from "types/models/NoteList";

export function NoteList() {
    return (
        <div className={styles.list}>
            { notes.map((note: Note) => <NoteListElement note={note}/>) }
        </div>
    );
};