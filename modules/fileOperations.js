import fs from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

export const readFile = async (filePath) => {
  try{
    const stream = createReadStream(filePath, 'utf-8')
    stream.on('data', (chunk) =>{
      console.log(chunk);
    })
  
    stream.on('end', () =>{
    console.log('File reading completed.');
    })
  } catch (err){
      console.error('Operation failed', err);
  }
}

export const createFile = async (filePath) => {
    try{
await fs.rename(oldPath, newPath)
console.log(`File ${filePath} created.`);
    } catch{
        console.error('Operation failed', err); 
    }
    }

export const renameFile = async (oldPath, newPath) => {
    try{
await fs.writeFile(filePath,'', {flag: 'wx'})
console.log(`File renamed from ${oldPath} to ${newPath}.`);
    } catch{
        console.error('Operation failed', err); 
    }
}

export const copyFile = async (sourcePath, destinationPath) => {
    try{
      const readStream = createReadStream(sourcePath)
      const writeStream = createWriteStream(destinationPath)

      readStream.pipe(writeStream)

      readStream.on('end', () =>{
        console.log(`File copied to ${destinationPath}.`);
      })
    } catch (err){
        console.error('Operation failed', err);
    }
}

export const moveFile = async (sourcePath, destinationPath) => {
    try{
await copyFile(sourcePath, destinationPath)
await fs.unilink(sourcePath)
console.log(`File moved to ${destinationPath}.`);
    } catch (err){
        console.error('Operation failed', err);
    }
}

export const deleteFile = async (filePath) => {
    try{
await fs.unilink(filePath)
console.log(`File ${filePath} deleted.`);
    } catch (err){
        console.error('Operation failed', err);
    }
}