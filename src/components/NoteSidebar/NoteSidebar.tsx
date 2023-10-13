import styles from "./NoteSidebar.module.css";

import { Button } from "components/shared/Button";
import { NoteList } from "./NoteList";
import { NoteSearch } from "./NoteSearch";
import { NoteSort } from "./NoteSort";
import { FC, useEffect } from "react";
import { NotesService } from "services/notesService";
import { useGlobalContext } from "hooks/useGlobalContext";
import { ListFilter } from "types/models/ListFilter";

export const NoteSidebar: FC = () => {
    const { 
        setNotes, 
        setCreateMode,
        setEditMode,
        setNote,
        setNoteHeading,
        setNoteText,
        currentSearch,
        currentSort,
    } = useGlobalContext();

    const listFilters: ListFilter = {
        search: currentSearch,
        sort: currentSort,
    }

    useEffect(() => {
        setNotes(NotesService.getNotes(listFilters));
    }, [listFilters.search, listFilters.sort])

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