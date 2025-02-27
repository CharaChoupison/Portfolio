#!/bin/sh

set -e  # Stoppe le script en cas d'erreur

# 1) Déterminer le mode de déploiement (Preview ou Final)
if [[ "$CI_COMMIT_TAG" == v* ]]; then
  TARGET_FOLDER="/home/hestiamaelcorp/web/bpm-events.fr/public_html/"
  echo "🚀 Déploiement FINAL sur $TARGET_FOLDER"
else
  # On utilise CI_PIPELINE_ID pour avoir un dossier unique pour chaque pipeline
  TARGET_FOLDER="/home/hestiamaelcorp/web/preview.maelcorp.com/public_html/${CI_PROJECT_NAME}_${CI_PIPELINE_ID}"
  echo "➡️ Déploiement en mode PREVIEW sur $TARGET_FOLDER"
fi

# 2) Vérifier que le 'build/'' contient des fichiers critiques
if [ ! -f "build/index.html" ] || [ ! -d "build/static" ]; then
  echo "❌ Erreur: Le dossier 'build/' est incomplet. Abandon."
  exit 1
fi

echo "📂 Contenu du build:"
ls -l build/

# 3) Déploiement FTP via 'lftp'
lftp -u "hestiamaelcorp,MaelCorpHestiaCP2024@!" preview.maelcorp.com <<EOF
set ssl:verify-certificate no
set net:timeout 120
set net:max-retries 5
set net:reconnect-interval-base 5
set net:reconnect-interval-multiplier 2
set net:reconnect-interval-max 60
set mirror:parallel-directories no
set mirror:parallel-transfer-count 2

mkdir -p $TARGET_FOLDER
mirror --verbose -R --exclude .git --exclude node_modules --exclude-glob "*.log" --exclude deploy.sh ./build/ $TARGET_FOLDER
bye
EOF

echo "✅ Déploiement terminé sur $TARGET_FOLDER"