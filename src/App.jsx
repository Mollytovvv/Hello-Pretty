import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import AmbientAnimation from './components/AmbientAnimation'
import Invitation from './components/Invitation'

import './styles/Global.css'
import './styles/Confirmation.css'

import sadCat from './assets/sad-cat.png'
import jollibeeTwerk from './assets/jollibee-twerk.png'

function App() {
  const [response, setResponse] = useState(null)

  // Send confirmation email when she clicks YES
  const handleAccept = async () => {
    try {
      const response = await fetch('/api/accept', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movie: 'Ayala',
          date: 'September 12, 2026',
          time: "Whenever you're done with work.",
        }),
      })

      const text = await response.text()

      console.log('API status:', response.status)
      console.log('API response:', text)

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`)
      }

      setResponse('yes')
    } catch (error) {
      console.error('Email error:', error)
      setResponse('email-error')
    }
  }

  const goBack = () => {
    setResponse(null)
  }

  return (
    <main className="app">
      <AmbientAnimation />

      <AnimatePresence mode="wait">

        {/* ================================
            INVITATION
            ================================ */}

        {response === null && (
          <Invitation
            key="invitation"
            onAccept={handleAccept}
            onThink={() => setResponse('maybe')}
          />
        )}


        {/* ================================
            YES CONFIRMATION
            ================================ */}

        {response === 'yes' && (
          <motion.section
            key="confirmation"
            className="confirmation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <div className="confirmation-content">

              <img
                className="jollibee-twerk"
                src={jollibeeTwerk}
                alt="Jollibee dancing"
              />

              <h1>It's a date!</h1>

              <p>See you on September 12 (Saturday) Pretty Girl</p>

              <p className="email-note">
                Check your email for confirmation. 
                PS: Baka nasa spam folder 😗
              </p>

              <span>🍿 🎬 ❤️</span>

              <button
                className="back-button"
                onClick={goBack}
              >
                ← Back
              </button>

            </div>
          </motion.section>
        )}


        {/* ================================
            MAYBE
            ================================ */}

        {response === 'maybe' && (
          <motion.section
            key="maybe"
            className="confirmation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <div className="confirmation-content">

              <img
                className="sad-cat"
                src={sadCat}
                alt="Sad cute cat"
              />

              <p>Sige na 🥺</p>

              <span>🍿 🎬 ❤️</span>

              <button
                className="back-button"
                onClick={goBack}
              >
                ← Back
              </button>

            </div>
          </motion.section>
        )}


        {/* ================================
            EMAIL ERROR
            ================================ */}

        {response === 'email-error' && (
          <motion.section
            key="email-error"
            className="confirmation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <div className="confirmation-content">

              <h1>Oops. 😭</h1>

              <p>
                Something went wrong sending the confirmation.
              </p>

              <button
                className="back-button"
                onClick={goBack}
              >
                ← Try again
              </button>

            </div>
          </motion.section>
        )}

      </AnimatePresence>
    </main>
  )
}

export default App
