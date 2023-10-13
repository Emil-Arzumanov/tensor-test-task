import styles from "./NoteList.module.css";
import { NoteListElement } from "components/shared/NoteListElement";
import { Note } from "types/models/NoteList";
import { useGlobalContext } from "hooks/useGlobalContext";

export function NoteList() {
    const { notes } = useGlobalContext();

    return (
        <div className={styles.list}>
            { notes.map((note: Note) => <NoteListElement note={note}/>) }
        </div>
    );
};