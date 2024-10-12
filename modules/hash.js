import {createHash} from 'crypto'
import { createReadStream } from 'fs'
import path from 'path'

export const hashFile = async (filePath) => {
    try{
const fullPath  = path.resolve(filePath)
const hash = createHash('sha256')
const stream = createReadStream(fullPath)

stream.on('data', (chunk) =>{
    hash.update(chunk);
})

stream.on('end', () =>{
    const fileHash = hash.digest('hex')
    console.log(`Hash (SHA-256) of file ${filePath}: ${fileHash}`);
})

stream.on('error', (err) =>{
        console.error('Operation failed', err);
})
  } catch (err) {
    console.error('Operation failed', err)
  }
}