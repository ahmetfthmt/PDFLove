
const fs = require('fs');
const contentEn = fs.readFileSync('src/config/tool-content/en.ts', 'utf8');
const contentTr = fs.readFileSync('src/config/tool-content/tr.ts', 'utf8');
const tools = fs.readFileSync('src/config/tools.ts', 'utf8');

function countKeys(content) {
    const matches = content.match(/'[a-z0-9-]+':/g) || [];
    return matches.length;
}

function countTools(content) {
    // Counting tool definitions like { id: '...'
    const matches = content.match(/id: '[a-z0-9-]+'/g) || [];
    return matches.length;
}

console.log('--- Tool Count Check ---');
console.log('Tools in tools.ts:', countTools(tools));
console.log('Tools in en.ts:', countKeys(contentEn));
console.log('Tools in tr.ts:', countKeys(contentTr));
