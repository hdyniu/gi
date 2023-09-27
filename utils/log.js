const chalk = require('chalk')
const format = require('util').format

exports.log = function () {
  const msg = format.apply(format, arguments)
  console.log(chalk.blue(msg))
}

exports.err = function () {
  const msg = format.apply(format, arguments)
  console.log(chalk.red(msg))
}

exports.success = function () {
  const msg = format.apply(format, arguments)
  console.log(chalk.green(msg))
}