import React, {ReactNode} from 'react';
import styles from "./styles.module.css"

interface Props{
    children: ReactNode;
    section: string;
}

function BookParagraph({children, section}:Props): JSX.Element{
return(
    <div className={styles.paragraph}>
        <div className={styles.paragraphTitle}>
            <h3>{section}</h3>
        </div>
        <div className={styles.paragrapBody}>{children}</div>
    </div>
);
}

export default BookParagraph;