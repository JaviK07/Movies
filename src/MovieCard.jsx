import styles from "./MovieCard.module.css"

export function MovieCard({ movie }) {
    console.log(styles)
    const ImgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <li className={styles.MovieCard}>
        <img 
        src={ImgUrl} 
        className={styles.list_img}
        width={230}
        height={345}
        ></img>
        {movie.title}
    </li>
}