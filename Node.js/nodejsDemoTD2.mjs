//enter 'npm init' in terminal to download package.json file
//fill values of asked question and then say yes
//go to npm website and search for modules and run their command on terminal to use them
//in package.json file , anew thing named as devDependencies occures


//chat gpt made me to add ("type": "module") in the package.json file as superhero war not printed on terminal
//it also made me to change the file extension from .js to .mjs
import superhero from '@fakerjs/superhero';
let superHeroName =superhero();
console.log(superHeroName);