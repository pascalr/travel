import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {buildWebsite} from './src/builder.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let rootDir = path.join(__dirname, 'docs')

let pages = [
  {url: '/', out: './docs/index.html'},
  {file: '/fonts/LaBelleAurore-Regular.ttf'},
  {file: '/border_01.png'},
  {file: '/border_02.jpg'},
  {file: '/border_03.jpg'},
  {file: '/border_06.jpg'},
  {file: '/border_07.jpg'},
  {file: '/pb-china7.png'},
]
  //{url: '/css/main.css', out: './docs/css/main.css'},

let places = ['thailand', 'cambodia', 'vietnam', 'china', 'japan', 'newzealand', 'italy', 'france', 'belgium', 'netherlands', 'turkey', 'bulgaria']
places.forEach(place => {
  pages.push({url: '/t/'+place, out: './docs/t/'+place+'/index.html'})
})

buildWebsite(rootDir, pages)
