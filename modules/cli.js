export const parseArguments = (args)=>{
    const usernameArg = args.find(arg => arg.startsWith('--username='))
    if(usernameArg){
        console.log(usernameArg.split('=')[1]);
        return usernameArg.split('=')[1]
    }
    
    return null
}