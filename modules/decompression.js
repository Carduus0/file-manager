import {createReadStream, createWriteStream} from 'fs'
import { createBrotliDecompress } from 'zlib'
import { pipeline } from 'stream/promises'
import path from 'path'

export const deCompressFile = async(filePath, destination)=>{
    try{
    const srcFullPath  = path.resolve(filePath)
    const destFullPath  = path.resolve(destination)

    const readStream = createReadStream(srcFullPath)
    const writeStream = createWriteStream(destFullPath)
    const brotliDecompress = createBrotliDecompress()

  await  pipeline(readStream, brotliDecompress, writeStream)
            console.error('Compression failed', err);    
} catch (err){
    console.log(`File compressed to ${destFullPath}`);
}
 }