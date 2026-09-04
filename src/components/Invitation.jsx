import { motion } from 'framer-motion'
import MovieCard from './MovieCard'

import '../styles/Invitation.css'

function Invitation({ onAccept, onThink }) {
  return (
    <motion.section
      className="invitation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="content">
        <h1>Hello, Pretty!!!</h1>

        <MovieCard />

        <p className="question">
          Will you watch a movie with me? :&gt;
        </p>

        <div className="actions">
          <motion.button
            className="yes-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAccept}
          >
            YES, LET'S WATCH 🍿
          </motion.button>

          <motion.button
            className="maybe-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onThink}
          >
            I'll think about it..
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}

export default Invitation