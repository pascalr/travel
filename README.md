# Travel

## TODO

- Image hauteur maximum 100vh? Téléphone sur le côté image vertical gérer ça comment?
- Enlever la photo que je suis bourré
- Voyage à New York
- Une catégorie autre et mettre d'autre photos personelles, comme Parc Yamaska
- Voyage au Canada 2012
- Ajouter Tahiti, 2022
- Corriger le français
- Une petite séparation entre l'image header et le site?
- Faire des belles lignes séparatrices entre les photos discrètes avec des tigilis
- Make image 804 px wide, without including border...
- Pouvoir changer l'ordre des photos.
- Passer à travers toutes les images et écrire une description quand j'ai de quoi à dire
- Écrire un article: Les mauvais côté du voyage
- L'index mettre le h1 plus près de l'image un peu pour les petits écrans
- Les images principales les garder dans un format plus grand. Éviter qu'elles soient strech.

## Credit

- Ma mère: Elle ma acheté un appareil photo juste avant que je parte en voyage. Je n'aurais probablement aucune image sinon... Merci maman!

### Images

- Don Cloud. border_01.png. https://pixabay.com/illustrations/border-picture-frame-black-picture-318820/
- Pete Linforth. border_02.jpg. https://pixabay.com/illustrations/picture-frame-antique-vintage-2254525/
- Gerd Altmann. border_03.jpg. https://pixabay.com/illustrations/frame-picture-frame-outline-shine-89486/
- MR1313. border_07.jpg. https://pixabay.com/illustrations/frame-photo-frame-sample-photoshop-2486643/

##### US

- Bailey Alexander. New mexico. https://unsplash.com/photos/RBjp7W3AWoo
- Joonyeop Baek. New mexico. https://unsplash.com/photos/4x6dxnVMRWE
- Julia Karnavusha. New mexico. https://unsplash.com/photos/gneucKsLjAQ
- Tim Peterson. Kentucky ranch. https://unsplash.com/photos/Az8P8lOcgPA
- Kevin Wiegand. Vermont snow. https://unsplash.com/photos/EvD-rF_ATw8
- tommao wang. Route 66. https://unsplash.com/photos/KhvzUKbF8Fw
- Tanya Dusett. West virginia mountains. https://unsplash.com/photos/KwJewnpUT6I
- Carter Brink. Santa Cruz Rolloer Coasters. https://unsplash.com/photos/H_JFlYdHD5w
- Sean Kelley. Santa Cruz Sea. https://unsplash.com/photos/qR5wQNyDA1s
- Michaela. San Fransisco brdige. https://unsplash.com/photos/fUYnzXrVmhE
- Clément Falize. San Fransisco. https://unsplash.com/photos/NBZT1EHzHd8
- Nick Sarvari. Alcatraz. https://unsplash.com/photos/KN9J6fHE5Pg

## Reduce image size
mogrify -resize 25% -quality 85 *.jpg

Rename all files extension from JPG to jpg:
for f in *.JPG; do mv "$f" $(echo "$f" | sed 's/JPG/jpg/g'); done

