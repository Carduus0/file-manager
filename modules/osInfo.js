import os from 'os'

export const getEOL = ()=> {
    console.log('System End-Of-Line:', JSON.stringify(os.EOL));
}

export const getCPUsInfo = ()=> {
    const cpus = os.cpus()
    console.log(`Total cpus: ${cpus.length}`);
    cpus.forEach((cpu,index)=>{
        console.log(`CPU ${index + 1}: Model - ${cpu.model}, Clock Rate - ${(cpu.speed / 1000).toFixed(2)} GHz`) 
    })  
}

export const getHomeDir = ()=> {
    console.log('Home directory:', os.homedir() );
}

export const getCurrentUser = ()=> {
    console.log('Current userName:', os.userInfo().username );
}

export const getCPUArchitecture = ()=> {
    console.log('CPU Architecture:', os.arch());
}



