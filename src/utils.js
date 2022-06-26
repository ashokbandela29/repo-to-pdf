const path = require('path')

function getSizeInByte(mb) {
  return mb * 0.8 * 1000 * 1000
}

// '../' => 'untitled'
// './'  => 'untitled'
// './path'  => 'path'
function getFileName(fpath) {
  const base = path.basename(fpath)
  return base[0] === '.' ? 'untitled' : base
}

function getCleanFilename(filename, folder, depth = 0) {
  filename = filename.replace(folder, '')
  if (folder === './') {
    depth -= 1
  }
  if (depth > 0) {
    return filename
      .split('/')
      .slice(depth)
      .join('/')
  } else {
    return filename
  }
}

// 'file.random_extension' => 'file.ext'
function getFileNameExt(fileName, ext = 'pdf') {
  return fileName.replace(/\.[0-9a-zA-Z]+$/, `.${ext}`)
}

module.exports = { getSizeInByte, getFileName, getCleanFilename, getFileNameExt }
