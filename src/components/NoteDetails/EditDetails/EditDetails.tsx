import { Button } from "components/shared/Button";
import { useGlobalContext } from "hooks/useGlobalContext";
import { FC } from "react";
import { Note } from "types/models/NoteList";
import styles from "./EditDetails.module.css";
import { NotesService } from "services/notesService";
import { DetailsInputs } from "components/shared/DetailsInputs";

interface EditDetailsProps {
    readonly noteProp: Note,
};

export const EditDetails: FC<EditDetailsProps> = ({noteProp}) => {
    const { 
        setEditMode, 
        setNotes, 
        setNote, 
        noteHeading, 
        setNoteHeading,
        noteText,
        setNoteText,
    } = useGlobalContext();

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.buttonWrapper}>
                <Button actionFunction={() => {
                    NotesService.editNote({
                        id: noteProp.id,
                        heading: noteHeading,
                        text: noteText,
                        date: new Date(),
                    });
                    setEditMode(false)
                    setNotes(NotesService.getNotes());
                    setNote(NotesService.getNoteById(noteProp.id));
                    setNoteHeading('');
                    setNoteText('');
                }} buttonText={'Сохранить'} />
                <Button actionFunction={() => {
                    setEditMode(false);
                }} buttonText={'Отмена'} />
            </div>
            <DetailsInputs/>
        </div>
    );
};