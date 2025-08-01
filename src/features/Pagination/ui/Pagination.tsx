import styles from './Pagination.module.css';

export const Pagination = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.pagination}>
                <li><a href="#">&lt;</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">&gt;</a></li>
            </ul>
        </div>
    );
};
