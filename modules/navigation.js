import {readdir} from 'fs/promises'
import path from 'path'
import { cwd, chdir } from 'process'

export const goUp = () =>{
const currentDir = cwd()
const parentDir = path.dirname(currentDir)
if(parentDir !== currentDir){
    chdir(parentDir)
}
console.log(`You are currently in ${cwd()}`);
}

export const changeDirectory = (dirPath) =>{
try{
chdir(dirPath)
console.log(`You are currently in ${cwd()} `);

}catch{
console.error('Operation failed')
}
}

export const listDirectory =  async (dirPath) =>{
    try{
    const items = await readdir(cwd(), {withFileTypes:true})
    const directories = []
    const files = []

    for(const item of items){
       if(item.isDirectory()){
         directories.push(item.name)
       } else if(item.isFile()){
         files.push(item.name)
       }
    }
    directories.sort()
    files.sort()

    console.log('Folders: ');
    directories.forEach(dir => console.log(`${dir}`))
    
    console.log('Files:');
    files.forEach(file => console.log(` ${file}`) )
    } catch {
    console.error('Operation failed')
    }
    }
