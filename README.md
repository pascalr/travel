# Travel

## TODO

Les images principales les garder dans un format plus grand. Éviter qu'elles soient strech.

## Credit

My mother: She bought me camera, otherwise I would have 0 pictures of my trip...
MAYBE
https://naldzgraphics.net/free-seamless-sand-textures/

## Reduce image size
mogrify -resize 25% -quality 85 *.jpg

Rename all files extension from JPG to jpg:
for f in *.JPG; do mv "$f" $(echo "$f" | sed 's/JPG/jpg/g'); done
