import styles from "./NoteSort.module.css";

export function NoteSort() {
    return (
        <div className={styles.sortWrapper}>
          <span>Сортировать по</span>
          <select className={styles.select} name="sortingType">
            <option value="desc">убыванию даты</option>
            <option value="asc">возрастанию даты</option>
          </select>
        </div>
    );
};