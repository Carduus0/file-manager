import { parseArguments } from './modules/cli.js'
import { goUp, changeDirectory, listDirectory } from './modules/navigation.js';
import { readFile, createFile, renameFile, copyFile, moveFile, deleteFile } from './modules/fileOperations.js';

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

switch (true){
 case input === 'up':
    goUp();
    break;

 case input ==='ls':
    await listDirectory();
    break;

case input.startsWith('cd'):
   const dirPath = input.slice(3);
   changeDirectory(dirPath)
   break;

case input.startsWith('read'):
   const readFilePath = input.slice(5).trim();
   await readFile(readFilePath);
   break;

case input.startsWith('create'):
   const createFilePath = input.slice(7).trim();
   await createFile(createFilePath);
   break;

case input.startsWith('rename'):
   const [oldFilePath, newFilePath] = input.slice(7).trim().split(' ');
   await renameFile(oldFilePath, newFilePath);
   break;

case input.startsWith('copy'):
   const [sourcePath, destinationPath] = input.slice(5).trim().split(' ');
   await copyFile(sourcePath, destinationPath);
   break;

case input.startsWith('move'):
   const [srcPath, destPath] = input.slice(5).trim().split(' ');
   await moveFile(srcPath, destPath);
   break;

case input.startsWith('delete'):
   const deleteFilePath = input.slice(7).trim();
   await deleteFile(deleteFilePath);
   break;

case input ==='.exit':
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit();

default:
        console.log('Invalid input');
}
printCurrentDirectory()
})

process.on('SIGINT', ()=> {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
})