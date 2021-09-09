const parse = require('./parse')
const fs = require('fs-extra')
const path = require('path')
const glob = require('glob')

const srcPath = path.join(__dirname, '../docs')
const tempPath = path.join(__dirname, '../temp')
const originOut = path.join(tempPath, 'origin')
const targetOut = path.join(tempPath, 'target')

async function translate(file) {
  const filePath = path.join(srcPath, file.replace(/^docs\//, ''))
  const text = await fs.readFile(filePath, { encoding: 'utf8' })
  const { origin, target } = parse(text)
  const relativePath = path.relative(srcPath, filePath)
  const originOutFile = path.join(originOut, relativePath)
  await fs.ensureFile(originOutFile)
  await fs.writeFile(originOutFile, origin.join('\n'), { encoding: 'utf8' })
  const targetOutFile = path.join(targetOut, relativePath)
  await fs.ensureFile(targetOutFile)
  await fs.writeFile(targetOutFile, target.join('\n'), { encoding: 'utf8' })
}

fs.emptyDirSync(tempPath)

const argv = process.argv
const mdPath = argv[argv.length - 1]

if (mdPath.endsWith('.md')) {
  translate(mdPath)
} else {
  glob('**/*.md', { cwd: srcPath }, (err, files) => {
    if (!err) {
      files.forEach(file => translate(file))
    }
  })
}
