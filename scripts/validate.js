const fs = require('fs')
const path = require('path')
const parse = require('./parse')

const argv = process.argv
const mdPath = argv[argv.length - 1]
const validateResultPath = path.join(__dirname, '..', `validate_result.md`)
if (mdPath.endsWith('.md')) {
  validateMd(path.join(__dirname, '../docs', mdPath.replace(/^docs\//, '')))
} else {
  fs.unlinkSync(validateResultPath)
  const mdFileDir = path.join(__dirname, '../docs', mdPath)
  fs.readdir(mdFileDir, (err, files) => {
    files.forEach(fileName => {
      validateMd(path.join(mdFileDir, fileName), fileName)
    })
  })
}

function validateMd(mdPath, fileName) {
  fs.readFile(mdPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      throw err
    }
    const result = parse(data)
    if (!fileName) {
      console.log(result.notTranslate)
      return;
    }

    fs.writeFileSync(validateResultPath, `
#### ${fileName} not Translate content 
\`\`\`
${result.notTranslate.join('\n')}
\`\`\`
---

`, { flag: 'a+' })
  })
}
