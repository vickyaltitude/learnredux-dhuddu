import {compose,pipe} from 'lodash/fp'


let trim = str => str.trim();
let wrapper = type => str => `<${type}>${str}</${type}>`;
let toLC = str => str.toLowerCase();

let intoLodash = pipe(trim,toLC,wrapper('div'));
console.log(intoLodash('  Hello World  '));

//console.log(wrapper(toLC(trim('  Hello World  ')))('div'));

function App() {
 
}

export default App;
