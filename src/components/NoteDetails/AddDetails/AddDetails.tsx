import { Button } from "components/shared/Button";
import { useGlobalContext } from "hooks/useGlobalContext";
import { NotesService } from "services/notesService";
import styles from "./AddDetails.module.css"
import { FC } from "react";
import { DetailsInputs } from "components/shared/DetailsInputs";

export const AddDetails: FC = () => {
    const {
        setCreateMode,
        setNotes, 
        noteHeading, 
        setNoteHeading,
        noteText,
        setNoteText,
    } = useGlobalContext();

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.buttonWrapper}>
                <Button actionFunction={() => {
                    NotesService.addNote({
                        id: Math.random(),
                        heading: noteHeading,
                        text: noteText,
                        date: new Date(),
                    });
                    setCreateMode(false)
                    setNotes(NotesService.getNotes());
                    setNoteHeading('');
                    setNoteText('');
                }} buttonText={'Создать'} />
                <Button actionFunction={() => {
                    setCreateMode(false);
                }} buttonText={'Отмена'} />
            </div>
            <DetailsInputs/>
        </div>
    );
};