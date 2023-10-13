import { NoteDetails } from "components/NoteDetails";
import { NoteSidebar } from "components/NoteSidebar";
import styles from "./App.module.css";
import React, { FC } from "react";


export const App: FC = () => {
  

  return (
      <main className={styles.pageLayout}>
        <NoteSidebar/>
        <NoteDetails/>
      </main>
  );
}
