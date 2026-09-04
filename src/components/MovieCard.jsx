import '../styles/MovieCard.css'
import twilightPoster from '../assets/twilight.jpg'

function MovieCard() {
  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={twilightPoster}
        alt="Twilight movie poster"
      />

      <div className="movie-info">
        <span>SEPTEMBER 04, 2026</span>
        <h2>Twilight</h2>
        <p>Whenever you're done with work. 🍿</p>
      </div>
    </div>
  )
}

export default MovieCard