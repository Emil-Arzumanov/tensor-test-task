import { useGlobalContext } from "hooks/useGlobalContext";
import styles from "./NoteSort.module.css";
import { SORT_DIRECTION_TO_READABLE, SortDirection } from "types/models/ListFilter";
import { getEnumKeys } from "utils/ListFilter.utils";
import { FC } from "react";

export const NoteSort: FC = () => {
  const { 
    currentSort, 
    setCurrentSort,
  } = useGlobalContext();

  return (
    <div className={styles.sortWrapper}>
      <span>Сортировать по</span>
      <select 
        onChange={(e) => {
          setCurrentSort(e.target.value as SortDirection)
        }}
        value={currentSort}
        className={styles.select} 
        name="sortingType"
      >
        {
          getEnumKeys(SortDirection).map((key, index) => (
            <option key={index} value={SortDirection[key]}>
              {SORT_DIRECTION_TO_READABLE[SortDirection[key]]}
            </option>
          ))
        }
      </select>
    </div>
  );
}; 