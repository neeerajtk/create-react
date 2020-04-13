import foods from './foods';
import {choice,remove} from './helpers';

let fruit = choice(foods);
console.log(`I'd like one ${fruit} , please.`);
console.log(`Here u go ${fruit} .`);