import React, { useEffect, useState } from 'react';
import '../assets/css/style.css';
import { getGameState, startGame } from './api.js';

function GamePage({ sessionId, onLeaveGame }) {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [players, setPlayers] = useState([]);
  const [timer, setTimer] = useState('00:00');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Charger l'état du jeu quand on arrive sur cette page
    async function fetchGame() {
      setIsLoading(true);
      try {
        const state = await getGameState(sessionId);
        setCurrentPlayer(state.currentPlayer);
        setPlayers(state.players);
        setTimer(state.timer);
      } catch (error) {
        console.error('Erreur lors de la récupération de la partie :', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGame();
  }, [sessionId]);

  // Bouton "Action" sur un joueur
  const handleActionClick = (playerId) => {
    alert(`Action déclenchée sur le joueur ${playerId}`);
    // Ici, tu pourrais appeler une API du style "actionOnPlayer(sessionId, playerId)"
  };

  // Démarrer la partie
  const handleStartClick = async () => {
    try {
      const response = await startGame(sessionId);
      if (response.success) {
        alert('La partie démarre !');
        // Possibilité de re-fetcher l’état si besoin
      } else {
        alert('Impossible de démarrer la partie.');
      }
    } catch (error) {
      console.error('Erreur lors du démarrage de la partie :', error);
    }
  };

  if (isLoading) {
    return <p style={{ color: '#fff', textAlign: 'center', marginTop: '50px' }}>Chargement de la partie...</p>;
  }

  return (
    <div className="game-page-container">
      <aside className="player-info-panel">
        {currentPlayer ? (
          <>
            <h2>Informations du Joueur</h2>
            <p>
              <strong>Identité Héroïque :</strong> {currentPlayer.identiteHeroique}
            </p>
            <p>
              <strong>Rôle :</strong> {currentPlayer.role}
            </p>
            <p>
              <strong>Statut du Pouvoir :</strong> {currentPlayer.statutDuPouvoir}
            </p>
          </>
        ) : (
          <p>Impossible de charger vos informations.</p>
        )}
      </aside>

      <main className="players-area">
        {players.map((player) => (
          <div key={player.id} className="player-card">
            <img
              src={player.heroImg}
              alt={player.name}
              className="player-hero-img"
            />
            <h3>{player.name}</h3>
            <button
              className="action-button"
              onClick={() => handleActionClick(player.id)}
            >
              Action
            </button>
          </div>
        ))}
      </main>

      <div className="timer-container">
        <div className="timer-display">{timer}</div>
        <button className="start-button" onClick={handleStartClick}>
          Démarrer
        </button>
        <button className="quit-button" onClick={onLeaveGame}>
          Quitter
        </button>
      </div>
    </div>
  );
}

export default GamePage;
