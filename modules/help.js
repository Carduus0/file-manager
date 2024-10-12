export const validCommands = [
    'up',
    'ls',
    'cd',
    'cat',
    'add',
    'rn',
    'cp',
    'mv',
    'rm',
    'os --EOL',
    'os --cpus',
    'os --homedir',
    'os --username',
    'os --architecture',
    '.exit'
]

export const showHelp = ()=>{
    console.log('Fvaliable commands:');
    validCommands.forEach(cmd => console.log(` - ${cmd}`))
}