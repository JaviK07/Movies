import logo from './logo.svg';
import './App.css';
import { MovieGrid } from './MovieGrid';
import { MovieCard } from './MovieCard';
import styles from "./App.module.css"


function App() {
  return (
    <div>
      <header>
     <h1 className={styles.header_title}>Movies</h1>
      </header>
      <main>
       <MovieGrid />
      </main>
    </div>
  );
}

export default App;
