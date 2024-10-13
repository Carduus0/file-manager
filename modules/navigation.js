import {readdir} from 'fs/promises'
import { homedir } from 'os'
import path from 'path'
import { cwd, chdir } from 'process'

const rootDir = path.parse(cwd()).root

export const goUp = () =>{
  const currentDir = cwd()
  const parentDir = path.dirname(currentDir)
  console.log('currentDir', currentDir);
  console.log('rootDir', rootDir);
  
  if(parentDir !== currentDir){
     if(parentDir === rootDir){
       console.log('You cannot go higher than your root directory')
     }else{
      try{
        chdir(parentDir)
        console.log(`You are currently in ${cwd()}`);
      }catch(err){
        console.error('Operation failed', err)
      }
     }
  }else{
  console.log('You are already in the root directory')
}
}

export const changeDirectory = (dirPath) =>{
try{
  const newDir = path.resolve(cwd(), dirPath)

  if(newDir.startsWith(homedir()) || newDir.startsWith(rootDir)){
    chdir(newDir)
    console.log(`You are currently in ${cwd()} `);
  }else{
    console.log('Operation failed: cannot change to a directory outside of your home directory'); 
  }

}catch(err){
console.error('Operation failed', err)
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
