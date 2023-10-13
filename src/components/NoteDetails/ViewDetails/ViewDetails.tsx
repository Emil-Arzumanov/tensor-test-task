import { Button } from "components/shared/Button";
import { useGlobalContext } from "hooks/useGlobalContext";
import { FC } from "react";
import { Note } from "types/models/NoteList";
import styles from "./ViewDetails.module.css";
import { NotesService } from "services/notesService";

interface ViewDetailsProps {
    readonly noteProp: Note,
};

export const ViewDetails: FC<ViewDetailsProps> = ({noteProp}) => {
    const { 
        setEditMode, 
        setNotes, 
        setNote,
        setNoteHeading,
        setNoteText,
    } = useGlobalContext();

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.buttonWrapper}>
                <Button actionFunction={() => {
                    setNoteHeading(noteProp.heading);
                    setNoteText(noteProp.text);
                    setEditMode(true)
                }} buttonText={'Редактировать'} />
                <Button actionFunction={() => {
                    NotesService.deleteNote(noteProp.id);
                    setNotes(NotesService.getNotes());
                    setNote(NotesService.getNoteById(noteProp.id));
                }} buttonText={'Удалить'} />
            </div>

            <div>
                <h2>{noteProp.heading}</h2>
                <p>{noteProp.text}</p>
            </div>
        </div>
    );
};