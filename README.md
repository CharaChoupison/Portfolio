# React Template ANBU

Bienvenue dans le **Template React ANBU**, une base prête à l'emploi pour démarrer rapidement vos projets React au sein du groupe ANBU.

## Caractéristiques

- Basé sur React 18
- Intégration de **Bootstrap** pour le style
- Configuration initiale pour **React Router** et **Axios**
- Compatible avec la CI/CD sur GitLab

---

## Installation

### Pré-requis
Assurez-vous d'avoir les outils suivants installés sur votre machine :
- **Node.js** (version >= 18, recommandé via [nvm](https://github.com/nvm-sh/nvm))
- **npm** (inclus avec Node.js)
- Un IDE comme [Visual Studio Code](https://code.visualstudio.com/)

### Configurer une clé SSH (dans un terminal)
  - Verifier qu'une version de SSH est installée
    ```yaml
    ssh -V
    ```
  - Lancer la création d'une clé
    ```yaml
    ssh-keygen -t ed25519
    ````
  - Donner un nom à la clef et un mot de passe (optionnel)
  - Copier la FingerPrint (clé publique) qui commence par SHA256 [...]
  - En cas de fermeture du terminal, on peut retrouver la clé en utilisant :
    ```yaml
    cat <nom_du_fichier>.pub
    ```

## Étapes pour démarrer
1. **Cloner le projet :**

      HTTPS :
   ```bash
   git clone https://konoha.maelcorp.com/anbu/react-templates.git
   ```

      SSH :
   ```bash
   git clone ssh://git@konoha.maelcorp.com:2442/anbu/react-templates.git
   ```
   **- Renommez le dossier en fonction du nom du projet**
   ```bash
   cd react-template
   ```
   **Supprimez le lien vers le dépôt Git d'origine et initialisez un nouveau dépôt :**
   ```bash
   cd mon-nouveau-projet
   ````
   *Sous MacOS / Linux :
   ```bash
   rm -rf .git
   ````
   *Sous Windows :
   ```bash
   rmdir /s .git
   ```
   Initialiser Git
   ```bash
   git init
   ```

    

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   npm start
   ```

   L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

---

## Structure du projet

```
react-template/
├── public/                # Fichiers statiques
├── src/                   # Code source
│   ├── components/        # Vos composants React
│   ├── pages/             # Vos pages React
│   ├── App.js             # Composant principal
│   ├── index.js           # Point d'entrée
├── package.json           # Configuration du projet
└── README.md              # Documentation du projet
```

---

## Dépendances

Le projet inclut déjà les dépendances suivantes :
- **React** (`react`, `react-dom`)
- **Bootstrap** pour le style
- **React Router** pour la navigation
- **Axios** pour les requêtes HTTP

Si vous souhaitez ajouter des dépendances supplémentaires, utilisez :
```bash
npm install <nom_du_package>
```

---

## Scripts disponibles

- `npm start` : Démarre le serveur de développement.
- `npm run build` : Génère une version de production de l'application.
- `npm run test` : Exécute les tests.
- `npm run eject` : Ejecte la configuration de `create-react-app`.

---

## Déploiement

Le projet est prêt pour être intégré à une pipeline CI/CD sur GitLab. Voici les étapes pour configurer le déploiement :

1. Ajoutez le fichier `.gitlab-ci.yml` suivant à votre projet :
   ```yaml
   stages:
     - build
     - deploy

   build:
     stage: build
     script:
       - npm install
       - npm run build
     artifacts:
       paths:
         - build/

   deploy:
     stage: deploy
     script:
       - echo "Ajoutez ici vos étapes de déploiement (FTP, SSH, etc.)"
   ```

2. Configurez vos variables GitLab (si nécessaire) pour le déploiement.

---

## Contribution

1. Clonez ce dépôt.
2. Créez une branche pour vos modifications : `git checkout -b feature/ma-branche`.
3. Faites vos modifications et validez-les : `git commit -m "Description des modifications"`.
4. Poussez la branche et ouvrez une *merge request*.

---

## Aide

Si vous rencontrez des problèmes, vous pouvez :
- Contacter l'équipe via Slack
- Consulter les [issues](https://konoha.maelcorp.com/anbu/react-template/-/issues)
- Lire la documentation React sur [reactjs.org](https://reactjs.org)

---

## Ajouter un projet déjà existant

**Pour ajouter un projet depuis votre machine locale, voici la marche à suivre :**

1. Se déplacer vers le dossier local contenant le projet
```yaml
cd /chemin/vers/mon-projet
```
2. Initialiser Git
```yaml
git init
git add .
git commit -m "Initial commit"
```
2. Pousser le projet 
```yaml
git remote add origin https://konoha.maelcorp.com/nomGroupe/nomProjet.git
git branch -M main
git push -uf origin main

```
---

## Auteur

**SARL MaelCorp.**
**ANBU Development Team**

---

## Licence

Ce projet est sous licence privée pour l'utilisation au sein de l'entreprise SARL MAELCORP. (SIRET : 91481328200011)
WELCOME TO THE ANBU.