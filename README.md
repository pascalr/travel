# Travel

## TODO

- Demander la permission aux gens à qui ont voit le visage.
- Ajouter des notes par images.
- Pretty font for home page & titles
- Pretty handwriting font for notes
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
