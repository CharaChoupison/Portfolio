// src/api/api.js

export async function getLobbyList() {
    // Simule une requête au backend
    return [
      { id: 1, name: 'Terre-828' },
      { id: 2, name: 'Terre-999999' },
      { id: 3, name: 'Terre-2149' },
    ];
  }
  
  export async function createLobby(lobbyName) {
    // Simule une requête "POST" au backend
    return { id: 4, name: lobbyName };
  }
  
  export async function joinLobby(sessionId) {
    // Simule une requête pour rejoindre un lobby
    return { success: true, sessionId };
  }
  
  export async function getGameState(sessionId) {
    // Simule la récupération de l'état du jeu
    return {
      currentPlayer: {
        identiteHeroique: 'Black Widow',
        role: 'Humain',
        statutDuPouvoir: 'Disponible',
      },
      players: [
        { id: 1, name: 'ILANNN', heroImg: '/images/black_panther.png' },
        { id: 2, name: 'THIBAULT', heroImg: '/images/silhouette.png' },
        { id: 3, name: 'ILANN', heroImg: '/images/ant_man.png' },
      ],
      timer: '00:00',
    };
  }
  
  export async function startGame(sessionId) {
    // Simule le démarrage de la partie
    return { success: true };
  }
  