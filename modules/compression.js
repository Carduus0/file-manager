import {createReadStream, createWriteStream} from 'fs'
import {createBrotliCompress} from 'zlib'
import { pipeline } from 'stream/promises'
import path from 'path'

 export const compressFile = async(filePath, destination)=>{
    try{
    const srcFullPath  = path.resolve(filePath)
    const destFullPath  = path.resolve(destination)

    const readStream = createReadStream(srcFullPath)
    const writeStream = createWriteStream(destFullPath)
    const brotliCompress = createBrotliCompress()

   await pipeline(readStream, brotliCompress, writeStream)
            console.log(`File compressed to ${destFullPath}`);
}catch(err){
    console.error('Compression failed', err);
}

 }