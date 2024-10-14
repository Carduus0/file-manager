export const validCommands = [
    { command: 'up', description: 'Go upper from current directory' },
    { command: 'ls', description: 'List all files and folders in current directory' },
    { command: 'cd path_to_directory', description: 'Go to dedicated folder from current directory' },
    { command: 'cat path_to_file', description: 'Read file and print its content in console' },
    { command: 'add new_file_name', description: 'Create empty file in current working directory' },
    { command: 'rn path_to_file new_filename', description: 'Rename file (content should remain unchanged)' },
    { command: 'cp path_to_file path_to_new_directory', description: 'Copy file using streams' },
    { command: 'mv path_to_file path_to_new_directory', description: 'Move file using streams (delete original)' },
    { command: 'rm path_to_file', description: 'Delete file' },
    { command: 'os --EOL', description: 'Get default system End-Of-Line and print to console' },
    { command: 'os --cpus', description: 'Get CPU information and print to console' },
    { command: 'os --homedir', description: 'Get home directory and print to console' },
    { command: 'os --username', description: 'Get current system user name and print to console' },
    { command: 'os --architecture', description: 'Get CPU architecture and print to console' },
    { command: 'hash path_to_file', description: 'Calculate hash for file and print to console' },
    { command: 'compress path_to_file path_to_destination', description: 'Compress file using Brotli and streams' },
    { command: 'decompress path_to_file path_to_destination', description: 'Decompress file using Brotli and streams' },
    { command: '.exit', description: 'Exit the file manager' }
]

export const showHelp = ()=>{
    console.log('Avaliable commands:');
    validCommands.forEach(cmd => {
        console.log(` - ${cmd.command}: ${cmd.description}`)})
}