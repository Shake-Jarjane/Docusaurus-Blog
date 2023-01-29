import React, {Children, ReactNode} from 'react';
import styles from "./styles.module.css"

interface Props{
    author: string;
    book_name: string;
}

function Origin({author, book_name}:Props): JSX.Element{
return(
    <div className={styles.origin}>
        <div className={styles.content}>
            <h4>摘录来自</h4>
            <div className={styles.detail}>
                {author} —— {book_name}
            </div>
        </div>
    </div>
);
}

export default Origin;