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
    'hash',
    'compress',
    'decompress',
    '.exit'
]

export const showHelp = ()=>{
    console.log('Avaliable commands:');
    validCommands.forEach(cmd => console.log(` - ${cmd}`))
}