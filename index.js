import { showHelp } from './modules/help.js';
import { goUp, changeDirectory, listDirectory } from './modules/navigation.js';
import { readFile, createFile, renameFile, copyFile, moveFile, deleteFile } from './modules/fileOperations.js';
import { getEOL, getCPUsInfo, getHomeDir, getCurrentUser, getCPUArchitecture } from './modules/osInfo.js';
import { hashFile } from './modules/hash.js';
import { compressFile } from './modules/compression.js';
import { deCompressFile } from './modules/decompression.js';

const usernameFromEnv = process.env.npm_config_username;
const username = usernameFromEnv || 'Anonymous';

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

case input.startsWith('cat'):
   const readFilePath = input.slice(4).trim();
   await readFile(readFilePath);
   break;

case input.startsWith('add'):
   const createFilePath = input.slice(4).trim();
   await createFile(createFilePath);
   break;

case input.startsWith('rn'):
   const [oldFilePath, newFilePath] = input.slice(3).trim().split(' ');
   await renameFile(oldFilePath, newFilePath);
   break;

case input.startsWith('cp'):
   const [sourcePath, destinationPath] = input.slice(3).trim().split(' ');
   await copyFile(sourcePath, destinationPath);
   break;

case input.startsWith('mv'):
   const [srcPath, destPath] = input.slice(3).trim().split(' ');
   await moveFile(srcPath, destPath);
   break;

case input.startsWith('rm'):
   const deleteFilePath = input.slice(3).trim();
   await deleteFile(deleteFilePath);
   break;

   case input.startsWith('hash'):
      const filePath = input.slice(5).trim();
      await hashFile(filePath);
      break;

   case input.startsWith('compress'):
      const [source, destination] = input.slice(9).trim().split(' ')
      await compressFile(source, destination);
      break;
   case input.startsWith('decompress'):
      const [src, dest] = input.slice(11).trim().split(' ')
      await deCompressFile(src, dest);

   case input ==='os --EOL':
    getEOL()
    break;
   case input ==='os --cpus':
    getCPUsInfo()
    break;
   case input ==='os --homedir':
    getHomeDir()
    break;
   case input ==='os --username':
    getCurrentUser()
    break;
   case input === 'os --architecture':
    getCPUArchitecture()
    break;

case input ==='.exit':
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit();

default:
        console.log('Invalid input');
        showHelp();
}
printCurrentDirectory()
})

process.on('SIGINT', ()=> {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
})