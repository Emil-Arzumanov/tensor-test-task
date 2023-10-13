import styles from "./NoteSearch.module.css";

export function NoteSearch() {
    return (
        <input 
          placeholder="Поиск..." 
          className={styles.searchField} 
          type="text" 
        />
    );
};