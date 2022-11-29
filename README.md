# Travel

## TODO

- Faire un bande header pour la page d'acceuil, où pour toute les page, au lieu d'une mini navbar, un grand header.
- Make image 804 px wide, without including border...
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

### Images

- Don Cloud. border_01.png. https://pixabay.com/illustrations/border-picture-frame-black-picture-318820/
- Pete Linforth. border_02.jpg. https://pixabay.com/illustrations/picture-frame-antique-vintage-2254525/
- Gerd Altmann. border_03.jpg. https://pixabay.com/illustrations/frame-picture-frame-outline-shine-89486/

## Reduce image size
mogrify -resize 25% -quality 85 *.jpg

Rename all files extension from JPG to jpg:
for f in *.JPG; do mv "$f" $(echo "$f" | sed 's/JPG/jpg/g'); done
