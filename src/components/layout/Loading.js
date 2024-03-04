import styles from './Loading.module.css';
import loading from '../../img/loading.svg';

function Loading( ) {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt='Spinner de Carregamento'/>
        </div>
    ); 
}

export default Loading;