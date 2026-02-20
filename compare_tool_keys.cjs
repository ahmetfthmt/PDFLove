const fs = require('fs');

function getKeys(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /^  '([a-z0-9-]+)': \{/gm;
    const keys = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        keys.push(match[1]);
    }
    return keys;
}

const enKeys = getKeys('src/config/tool-content/en.ts');
const trKeys = getKeys('src/config/tool-content/tr.ts');

console.log('Total EN tools:', enKeys.length);
console.log('Total TR tools:', trKeys.length);

const missingInTr = enKeys.filter(k => !trKeys.includes(k));
const extraInTr = trKeys.filter(k => !enKeys.includes(k));

if (missingInTr.length > 0) {
    console.log('Missing in TR:', missingInTr);
} else {
    console.log('No missing tools in TR.');
}

if (extraInTr.length > 0) {
    console.log('Extra in TR:', extraInTr);
} else {
    console.log('No extra tools in TR.');
}
