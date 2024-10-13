import os from 'os'

export const getEOL = ()=> {
    try{
        console.log('System End-Of-Line:', JSON.stringify(os.EOL));
    } catch(err){
        console.error('Error getting End-Of-line:', err)
    }

}

export const getCPUsInfo = ()=> {
    try{
        const cpus = os.cpus()
        console.log(`Total cpus: ${cpus.length}`);
        cpus.forEach((cpu,index)=>{
            console.log(`CPU ${index + 1}: Model - ${cpu.model}, Clock Rate - ${(cpu.speed / 1000).toFixed(2)} GHz`) 
        })  
    } catch(err){
        console.error('Error getting CPU info :', err)
    }
}

export const getHomeDir = ()=> {
    try{
        console.log('Home directory:', os.homedir() );
    } catch(err){
        console.error('Error getting home directory:', err)
    }
}

export const getCurrentUser = ()=> {
    try{
        console.log('Current userName:', os.userInfo().username );
    } catch(err){
        console.error('Error getting current user information :', err)
    }
}

export const getCPUArchitecture = ()=> {
    try{
        console.log('CPU Architecture:', os.arch());
    } catch(err){
        console.error('Error getting CPU architecture :', err)
    }
}



