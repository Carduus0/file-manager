import {access} from 'fs/promises'

export const directoryExist = async (dirPath) =>{
    try{
         await access(dirPath)
         return true
    } catch(err){
        return false
    }
}