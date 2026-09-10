import '../styles/MovieCard.css'
import twilightPoster from '../assets/ayalaa.png'

function MovieCard() {
  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={twilightPoster}
        alt="Twilight movie poster"
      />

      <div className="movie-info">
        <span>SEPTEMBER 12, 2026</span>
        <h2>Ayala Malls Circuit</h2>
        <p>Whenever you're done with work. 🍿</p>
      </div>
    </div>
  )
}

export default MovieCard