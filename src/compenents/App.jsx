import React, { useState } from 'react';
import ListeDesSessions from './ListeDesSessions';
import GamePage from './GamePage';

function App() {
  const [currentSessionId, setCurrentSessionId] = useState(null);

  // Callback quand on rejoint un lobby
  const handleJoinLobby = (sessionId) => {
    setCurrentSessionId(sessionId);
  };

  // Callback quand on quitte la partie
  const handleLeaveGame = () => {
    setCurrentSessionId(null);
  };

  // Si on n'a pas encore rejoint de lobby, on affiche la liste.
  // Dès qu'on a un sessionId, on affiche la GamePage.
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000' }}>
      {currentSessionId ? (
        <GamePage sessionId={currentSessionId} onLeaveGame={handleLeaveGame} />
      ) : (
        <ListeDesSessions onJoinLobby={handleJoinLobby} />
      )}
    </div>
  );
}

export default App;
