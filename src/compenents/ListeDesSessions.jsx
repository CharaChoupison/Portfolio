import React, { useEffect, useState } from 'react';
import '../assets/css/style.css';
import { getLobbyList, createLobby, joinLobby } from './api.js';

function ListeDesSessions({ onJoinLobby }) {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Charger la liste des lobbys dès le montage
  useEffect(() => {
    async function fetchSessions() {
      setIsLoading(true);
      try {
        const data = await getLobbyList();
        setSessions(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des lobbys :', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSessions();
  }, []);

  // Créer un nouveau lobby
  const handleCreateLobby = async () => {
    const lobbyName = prompt('Nom du nouveau lobby :');
    if (!lobbyName) return;

    try {
      const newLobby = await createLobby(lobbyName);
      setSessions((prev) => [...prev, newLobby]);
      alert(`Lobby créé : ${newLobby.name}`);
    } catch (error) {
      console.error('Erreur lors de la création du lobby :', error);
    }
  };

  // Rejoindre un lobby
  const handleJoin = async (sessionId) => {
    try {
      const response = await joinLobby(sessionId);
      if (response.success) {
        onJoinLobby(sessionId); // <- On signale au parent qu'on a rejoint
      } else {
        alert('Impossible de rejoindre ce lobby');
      }
    } catch (error) {
      console.error('Erreur lors de la jointure du lobby :', error);
    }
  };

  return (
    <div className="liste-sessions-container">
      <h1>Liste des Sessions Disponibles</h1>

      <button className="create-lobby-button" onClick={handleCreateLobby}>
        Créer un Lobby
      </button>

      {isLoading ? (
        <p>Chargement des lobbys...</p>
      ) : (
        <div className="sessions-list">
          {sessions.map((session) => (
            <div key={session.id} className="session-item">
              <span className="session-name">{session.name}</span>
              <button className="join-button" onClick={() => handleJoin(session.id)}>
                Rejoindre
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListeDesSessions;
