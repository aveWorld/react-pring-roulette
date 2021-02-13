import { nanoid } from 'nanoid';
import awp from '../assets/broken-fang/awp_exoskeleton.png';
import berettas from '../assets/broken-fang/berettas_dezastre.png';
import cz75 from '../assets/broken-fang/cz75_vendetta.png';
import five_seven from '../assets/broken-fang/five_seven_tale.png';
import g3sg1 from '../assets/broken-fang/g3sg1_mesh.png';
import galil from '../assets/broken-fang/galil_vandal.png';
import glock from '../assets/broken-fang/glock_noir.png';
import hands_wrap from '../assets/broken-fang/hand-wraps_caution.png';
import m4a1 from '../assets/broken-fang/m4a1-s_printstream.png';
import m4a4 from '../assets/broken-fang/m4a4_security.png';
import m249 from '../assets/broken-fang/m249_relief.png';
import mp5 from '../assets/broken-fang/mp5-sd_zero.png';
import nova from '../assets/broken-fang/nova_polymer.png';
import p90 from '../assets/broken-fang/p90_cocoa.png';
import p250 from '../assets/broken-fang/p250_contaminant.png';
import ssg from '../assets/broken-fang/ssg_parallax.png';
import ump from '../assets/broken-fang/ump_bismuth.png';
import usp_s from '../assets/broken-fang/usp-s_mashup.png';

const guns = [
  {
    type: 'blue',
    id: nanoid(),
    name: 'P90 | Cocoa Rampage',
    img: p90,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'G3SG1 | Digital Mesh',
    img: g3sg1,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'CZ75-Auto | Vendetta',
    img: cz75,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'P250 | Contaminant',
    img: p250,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'M249 | Deep Relief',
    img: m249,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'MP5-SD | Condition Zero',
    img: mp5,
  },
  {
    type: 'blue',
    id: nanoid(),
    name: 'Galil AR | Vandal',
    img: galil,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'UMP-45 | Gold Bismuth',
    img: ump,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'Nova | Clear Polymer',
    img: nova,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'Dual Berettas | Dezastre',
    img: berettas,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'SSG 08 | Parallax',
    img: ssg,
  },
  {
    type: 'purple',
    id: nanoid(),
    name: 'AWP | Exoskeleton',
    img: awp,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'Five-SeveN | Fairy Tale',
    img: five_seven,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'USP-S | Monster Mashup',
    img: usp_s,
  },
  {
    type: 'pink',
    id: nanoid(),
    name: 'M4A4 | Cyber Security',
    img: m4a4,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'M4A1-S | Printstream',
    img: m4a1,
  },
  {
    type: 'red',
    id: nanoid(),
    name: 'Glock-18 | Neo-Noir',
    img: glock,
  },
  {
    type: 'rare',
    id: nanoid(),
    name: 'Hand Wraps | CAUTION!',
    img: hands_wrap,
  },
];

const blue_guns = guns.filter((item) => item.type === 'blue');
const purple_guns = guns.filter((item) => item.type === 'purple');
const pink_guns = guns.filter((item) => item.type === 'pink');
const red_guns = guns.filter((item) => item.type === 'red');
const rare_guns = guns.filter((item) => item.type === 'rare');

let i = 0;
while (blue_guns.length < 56) {
  const item_tmp = { ...blue_guns[i] };
  item_tmp.id = nanoid();
  blue_guns.push(item_tmp);
  i++;
}
i = 0;
while (purple_guns.length < 30) {
  const item_tmp = { ...purple_guns[i] };
  item_tmp.id = nanoid();
  purple_guns.push(item_tmp);
  i++;
}

i = 0;
while (pink_guns.length < 9) {
  const item_tmp = { ...pink_guns[i] };
  item_tmp.id = nanoid();
  pink_guns.push(item_tmp);
  i++;
}

i = 0;
while (red_guns.length < 4) {
  const item_tmp = { ...red_guns[i] };
  item_tmp.id = nanoid();
  red_guns.push(item_tmp);
  i++;
}

const data = [...blue_guns, ...purple_guns, ...pink_guns, ...red_guns, ...rare_guns];

export { data };
