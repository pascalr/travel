# Travel

## TODO

- Mettre la couleur des lignes manquantes la même couleur que le texte.
- En NODE_ENV=development, ajouter un bouton collapse pour ajouter une description. Ajouter un formalaire qui POST une description. Sauvegarder les descriptions dans un fichiers JSON.
- L'index mettre le h1 plus près de l'image un peu pour les petits écrans
- Au lieu de faire comme je fais, utiliser un css pour chaque trip. public/css/france.css, ...
- Demander la permission aux gens à qui ont voit le visage.
- Ajouter des notes par images.
- Pretty font for titles
- Faire des borders personalisés pour chaque pays. Par exemple pour la Chine, une border surtout rouge, mais un peu dorée. Pour le cambodge style Angkor Wat.
- Les images principales les garder dans un format plus grand. Éviter qu'elles soient strech.

## Credit

My mother: She bought me camera, otherwise I would have 0 pictures of my trip...
MAYBE
https://naldzgraphics.net/free-seamless-sand-textures/

## Reduce image size
mogrify -resize 25% -quality 85 *.jpg

Rename all files extension from JPG to jpg:
for f in *.JPG; do mv "$f" $(echo "$f" | sed 's/JPG/jpg/g'); done
