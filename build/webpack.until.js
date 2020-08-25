/**
 * 自动生成文件路径
 */
const path = require('path')
const resolve = function (_path) {
  return  path.resolve(path.resolve( __dirname, '../'), _path)
}
let until = {
  resolve
}
module.exports = until

