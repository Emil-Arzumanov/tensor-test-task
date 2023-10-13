import { useGlobalContext } from "hooks/useGlobalContext";
import styles from "./NoteSearch.module.css";

export function NoteSearch() {
  const { 
    currentSearch, 
    setCurrentSearch,
  } = useGlobalContext();

    return (
        <input 
          onChange={(e) => setCurrentSearch(e.target.value)}
          value={currentSearch} 
          placeholder="Поиск..." 
          className={styles.searchField} 
          type="text" 
        />
    );
};