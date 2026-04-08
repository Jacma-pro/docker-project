import './App.css'

function App() {

  return (
    <div className="app-container">
      <header className="hero">
        <div className="mascots">
          <span className="emoji dodo" role="img" aria-label="dodo">🦤</span>
          <span className="emoji heart" role="img" aria-label="heart">❤️</span>
          <span className="emoji whale" role="img" aria-label="whale">🐳</span>
        </div>
        <h1>Hello, DoDocker!</h1>
        <p className="subtitle">L'alliance parfaite entre le Dodo et la Baleine 🌊</p>
      </header>

      <main className="features">
        <div className="card">
          <h3>🚀 Super Rapide</h3>
          <p>Propulsé par Vite et React pour une expérience de développement instantanée.</p>
        </div>
        <div className="card">
          <h3>📦 Conteneurisé</h3>
          <p>Prêt à être déployé n'importe où et n'importe quand grâce à Docker.</p>
        </div>
        <div className="card">
          <h3>✨ Magique</h3>
          <p>Parce que rien de tel qu'un Dodo qui pilote un conteneur !</p>
        </div>
      </main>

      <footer className="footer">
        <p>Fait avec passion pour le DevOps</p>
      </footer>
    </div>
  )
}

export default App
