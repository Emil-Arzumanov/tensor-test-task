import styles from "./NoteSidebar.module.css";

import { Button } from "components/shared/Button";
import { NoteList } from "./NoteList";
import { NoteSearch } from "./NoteSearch";
import { NoteSort } from "./NoteSort";

export function NoteSidebar() {
    return (
        <div className={styles.sidebar}>
            <Button actionFunction={() => alert("List")} buttonText={'+ Заметка'} />
            <NoteSearch/>
            <NoteSort/>
            <NoteList/>
        </div>
    );
};