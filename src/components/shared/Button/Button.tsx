import { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    readonly actionFunction: () => void,
    readonly buttonText: string
};

export const Button: FC<ButtonProps> = ({actionFunction, buttonText}) => {
    return (
        <button onClick={() => actionFunction()} className={styles.button}>
            {buttonText}
        </button>
    );
};