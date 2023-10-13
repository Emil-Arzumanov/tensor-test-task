import styles from "./NoteDetails.module.css";
import { FC } from "react";
import { useGlobalContext } from "hooks/useGlobalContext";
import { ViewDetails } from "./ViewDetails";
import { EditDetails } from "./EditDetails";
import { AddDetails } from "./AddDetails";

export const NoteDetails: FC = () => {
    const { note, editMode, createMode } = useGlobalContext();

    if (note && editMode === false && createMode === false) {
        return (
            <ViewDetails noteProp={note}/>
        );
    } else if (note && editMode && createMode === false) {
        return (
            <EditDetails noteProp={note}/>
        );
    } else if (!note && editMode === false && createMode) {
        return (
            <AddDetails/>
        );
    } else {
        return (
            <div className={styles.mainWrapper}></div>
        );
    }
};