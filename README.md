# Travel

## TODO

- Faire une description de base pour chacun des pays.
- Pouvoir changer l'ordre des photos.
- Passer à travers toutes les images et écrire une description quand j'ai de quoi à dire
- Écrire un article: Les mauvais côté du voyage
- L'index mettre le h1 plus près de l'image un peu pour les petits écrans
- Pretty font for titles
- Faire des borders personalisés pour chaque pays. Par exemple pour la Chine, une border surtout rouge, mais un peu dorée. Pour le cambodge style Angkor Wat.
- Les images principales les garder dans un format plus grand. Éviter qu'elles soient strech.

## Credit

- Ma mère: Elle ma acheté un appareil photo juste avant que je parte en voyage. Je n'aurais probablement aucune image sinon... Merci maman!

## Reduce image size
mogrify -resize 25% -quality 85 *.jpg

Rename all files extension from JPG to jpg:
for f in *.JPG; do mv "$f" $(echo "$f" | sed 's/JPG/jpg/g'); done
