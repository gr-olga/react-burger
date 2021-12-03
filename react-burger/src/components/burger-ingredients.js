import React, {useState} from 'react';
import styles from './styles.module.css';

const Film = ({ data }) => {
    const image = (
        <img
            src={
                data.image
                    ? `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`
                    : 'https://via.placeholder.com/250x150'
            }
            alt={data.nameRU}
        />
    );
    return (
        <div>
            <div className={styles.img}>{image}</div>
            <p className={styles.name}>{data.nameRU}</p>
            <p className={styles.description}>{`${data.year}, ${data.country}`}</p>
            <p className={styles.description}>{`${data.duration} мин.`}</p>
        </div>
    );
};

function App () {
    const[state, setState] = useState({
        isLoading: false,
        hasError: false,
        data: []
    })

    useEffect(()=> {
        getFilms()
    })

   function getFilms () {
        setState({ ...state, hasError: false, isLoading: true });
        fetch('https://api.nomoreparties.co/beatfilm-movies')
            .then(res => res.json())
            .then(data => setState({ ...state, data, isLoading: false }))
            .catch(e => {
                setState({ ...state, hasError: true, isLoading: false });
            });
    };

    return (
        <div className={`${styles.app} ${styles.grid}`}>
            {state.isLoading && 'Загрузка...'}
            {state.hasError && 'Произошла ошибка'}
            {!state.isLoading &&
            !state.hasError &&
            state.data.length &&
            state.data.map((film, index) => <Film key={index} data={film} />)}
        </div>
    );

}
