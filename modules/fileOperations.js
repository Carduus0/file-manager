import fs from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

export const readFile = async (filePath) => {
  try{
    const fullPath = path.resolve(filePath)
    const stream = createReadStream(fullPath, 'utf-8')

    stream.on('data', (chunk) =>{
      console.log(chunk);
    })
  
    stream.on('end', () =>{
    console.log('File reading completed.');
    })

    stream.on('error', (err) =>{
        console.error('Operation failed', err);
      })
  } catch (err){
      console.error('Operation failed', err);
  }
}

export const createFile = async (filePath) => {
    try{
        const fullPath = path.resolve(filePath)
        await fs.writeFile(fullPath,'', {flag: 'wx'})
        console.log(`File ${filePath} created.`);
    } catch(err){
        console.error('Operation failed', err); 
    }
    }

export const renameFile = async (oldPath, newFilename) => {
    try{
        const oldFullPath = path.resolve(oldPath)
        const dir = path.dirname(oldFullPath)
        const newFullPath = path.join(dir, newFilename)
        
        await fs.rename(oldFullPath, newFullPath)
        console.log(`File renamed from ${oldPath} to ${newFilename}.`);
    } catch(err){
        console.error('Operation failed', err); 
    }
}

export const copyFile = async (sourcePath, destinationPath) => {
    try{
        const srcFullPath = path.resolve(sourcePath)
        const destFullPath = path.resolve(destinationPath)

      const readStream = createReadStream(srcFullPath)
      const writeStream = createWriteStream(destFullPath)

      readStream.pipe(writeStream)

      readStream.on('end', () =>{
        console.log(`File copied to ${destinationPath}.`);
      })
      readStream.on('error', (err) =>{
        console.error('Operation failed', err);
      })
      writeStream.on('error', (err) =>{
        console.error('Operation failed', err);
      })
    } catch (err){
        console.error('Operation failed', err);
    }
}

export const moveFile = async (sourcePath, destinationDir) => {
    try{
        const srcFullPath = path.resolve(sourcePath)
        const destFileName = path.basename(sourcePath);
        const destFullPath = path.join(destinationDir, destFileName)

        await copyFile(srcFullPath, destFullPath)
        await fs.unlink(srcFullPath)
        console.log(`File moved to ${destFullPath}.`);
    } catch (err){
        console.error('Operation failed', err);
    }
}

export const deleteFile = async (filePath) => {
    try{
        const fullPath = path.resolve(filePath)
        await fs.unlink(fullPath)
        console.log(`File ${filePath} deleted.`);
    } catch (err){
        console.error('Operation failed', err);
    }
}