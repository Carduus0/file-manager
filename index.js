import { parseArguments } from './modules/cli.js'
import { goUp, changeDirectory, listDirectory } from './modules/navigation.js';
const args = process.argv.slice(2)
console.log(process.argv);
const username = parseArguments(args)

if(username){
    console.log(`Welcome to  the File Manager, ${username}`);  
} else {
    console.log('Username not provided. Please run the program with --username=your_username.');
    process.exit(1)
}

const printCurrentDirectory = () =>{
   console.log(`You are currently in ${process.cwd()}`);
}
printCurrentDirectory()

process.stdin.on('data', async (data) =>{
    const input = data.toString().trim()

switch (input){
 case 'up':
    goUp();
    break;
 case 'ls':
    await listDirectory();
    break;
    default:
        if(input.startsWith('cd')){
const dirPath = input.slice(3);
changeDirectory(dirPath)
        } else if (input === '.exit') {
console.log(`Thank you for using File Manager, ${username}, goodbye!`);
process.exit()
        }else {
            console.log('Invalid input');
            
        }
}
printCurrentDirectory()
})

process.on('SIGINT', ()=> {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
})