import {readdir} from 'fs/promises'
import { homedir } from 'os'
import path from 'path'
import { cwd, chdir } from 'process'
import { directoryExist } from './file-utils.js'

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

export const changeDirectory = async (dirPath) =>{
try{
  const newDir = path.resolve(cwd(), dirPath)

  if(await directoryExist(newDir)){
    if(newDir.startsWith(homedir()) || newDir.startsWith(rootDir)){
      chdir(newDir)
      console.log(`You are currently in ${cwd()} `);
    }else{
      console.log('Operation failed: cannot change to a directory outside of your home directory'); 
    }

  }else{
    console.log('Operation failed: the directory does not exist');
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
    const tableData = []

    for(const item of items){
       if(item.isDirectory()){
         directories.push({ Name: item.name, Type: 'Folder' })
       } else if(item.isFile()){
         files.push({ Name: item.name, Type: 'File' })
       }
    }
    directories.sort((a, b) => a.Name.localeCompare(b.Name))
    files.sort((a, b) => a.Name.localeCompare(b.Name))

    tableData.push(...directories, ...files);
    // console.log('Folders: ');
    // directories.forEach(dir => console.log(`${dir}`))
    
    // console.log('Files:');
    // files.forEach(file => console.log(` ${file}`) )
    console.table(tableData)
    } catch {
    console.error('Operation failed')
    }
    }
