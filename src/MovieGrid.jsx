import movies from "./movies.json"
import { MovieCard } from "./MovieCard"
import styles from "./MovieGrid.module.css"

export function MovieGrid() {

    return (
        <ul className={styles.MovieGrid} >
            {movies.map((movie, index) => {
                return <MovieCard key={index} movie={movie} ></MovieCard>
            }
            )}
        </ul>
    )
}