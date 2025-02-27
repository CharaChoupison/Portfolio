# Secret Invasion

Le projet **Secret Invasion** est un jeu en ligne, inspiré par le jeu du **Loup Garou** ou **Undercover**, transporté dans l’univers **Marvel**.

## Description

Dans ce jeu, on retrouve **six héros** (joueurs) infiltrés par un **Skrull**, dont l’objectif est de tous les éliminer. Chaque héros possède une **capacité** liée à sa personnalité héroïque.  
Cependant, le Skrull peut également utiliser les capacités du héros qu’il incarne, ce qui le rend particulièrement **dangereux**.

## Phases de jeu

Le jeu se compose de **quatre phases** qui s’enchaînent :

1. **Discussion**  
   Les joueurs partagent leurs hypothèses et tentent d’identifier qui pourrait être le Skrull.  
2. **Nuit**  
   Le Skrull agit (ou prépare son action), et certaines capacités de héros peuvent s’activer discrètement.  
3. **Discussion**  
   Les joueurs découvrent les conséquences de la Nuit et reprennent leurs débats.  
4. **Vote**  
   Les joueurs votent pour éliminer la personne qu’ils soupçonnent d’être le Skrull.

Chaque phase a un **rôle crucial** : la discussion sert à échanger des informations, la nuit permet d’effectuer des actions secrètes et le vote est décisif pour la survie des joueurs.

## Structure du code

La structure du code est divisée en deux grandes parties :

- **Front-end (React.js)**  
  Gère l’affichage et les interactions utilisateur (interfaces, boutons, formulaires).  
- **Back-end (PHP)**  
  Gère la logique métier (distribution des rôles, actions de jeu, phase , ...) et la connexion à la base de données.

Pour le Back-end on retrouve : 

- **config/** : Fichiers de configuration (base de données).
- **controller/** : Logique et fonctions utilitaires (ex.: générateur de code).
- **model/** : Fichiers principaux pour la gestion du jeu (lobbies, players, power, etc.).