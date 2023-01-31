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
            {/* <h4> */}
                {`摘自`}&nbsp;&nbsp;{author} —— {book_name}
            {/* </h4> */}
        </div>
    </div>
);
}

export default Origin;