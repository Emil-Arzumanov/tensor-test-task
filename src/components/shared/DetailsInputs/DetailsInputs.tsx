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
        <h2>Загаловок</h2>
        <input 
          onChange={(e) => setNoteHeading(e.target.value)}
          value={noteHeading} 
          placeholder="Heading" 
          type="text" 
        />
        <h2>Описание</h2>
        <input
          onChange={(e) => setNoteText(e.target.value)}
          value={noteText} 
          placeholder="Text"
          type="text"
        />
      </div>
    );
};