import foods from './foods';
import {choice,remove} from './helpers';

let fruit = choice(foods);
console.log(`I'd like one ${fruit} , please.`);
console.log(`Here u go ${fruit} .`);
let remaining = remove(foods,fruit);
console.log("another ?");
console.log(`Sorry, Were all left with other ${remaining.length} fruits`);