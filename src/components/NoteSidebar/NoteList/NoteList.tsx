import styles from "./NoteList.module.css";
import { NoteListElement } from "components/shared/NoteListElement";
import { Note } from "types/models/NoteList";
import { useGlobalContext } from "hooks/useGlobalContext";
import { FC } from "react";

export const NoteList: FC = () => {
    const { notes } = useGlobalContext();

    return (
        <div className={styles.list}>
            { notes.map((note: Note) => <NoteListElement key={note.id} note={note}/>) }
        </div>
    );
};