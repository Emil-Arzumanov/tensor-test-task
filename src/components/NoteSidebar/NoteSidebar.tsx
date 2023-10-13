import styles from "./NoteSidebar.module.css";

import { Button } from "components/shared/Button";
import { NoteList } from "./NoteList";
import { NoteSearch } from "./NoteSearch";
import { NoteSort } from "./NoteSort";
import { useEffect } from "react";
import { NotesService } from "services/notesService";
import { useGlobalContext } from "hooks/useGlobalContext";

export function NoteSidebar() {
    const { 
        setNotes, 
        setCreateMode,
        setEditMode,
        setNote,
        setNoteHeading,
        setNoteText,
    } = useGlobalContext();

    useEffect(() => {
        setNotes(NotesService.getNotes());
    }, [])

    return (
        <div className={styles.sidebar}>
            <Button actionFunction={() => {
                setNote(null)
                setEditMode(false)
                setCreateMode(true)
                setNoteHeading('');
                setNoteText('');
            }} buttonText={'+ Заметка'} />
            <NoteSearch/>
            <NoteSort/>
            <NoteList/>
        </div>
    );
};