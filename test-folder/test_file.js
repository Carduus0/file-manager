export const parseArguments = (args)=>{
    const usernameArg = args.find(arg => arg.startsWith('--username='))
    if(usernameArg){
        return usernameArg.split('=')[1]
    }
    return null
}