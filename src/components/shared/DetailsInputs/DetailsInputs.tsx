import { useGlobalContext } from "hooks/useGlobalContext";
import { FC } from "react";
import styles from "./DetailsInputs.module.css";

export const DetailsInputs: FC = () => {
    const {
        noteHeading, 
        setNoteHeading,
        noteText,
        setNoteText,
    } = useGlobalContext();

    return (
      <div className={styles.inputsWrapper}>
        <input 
          onChange={(e) => setNoteHeading(e.target.value)}
          value={noteHeading} 
          placeholder="Heading" 
          type="text" 
        />
        <textarea
          onChange={(e) => setNoteText(e.target.value)}
          value={noteText} 
          placeholder="Text"
        />
      </div>
    );
};