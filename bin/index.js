#!/usr/bin/env node

const { execSync } = require('child_process');

const args = process.argv.slice(2);

const gitCommands = {
  'gcl': 'git clone',
  'gp': 'git pull',
  'gpu': 'git push',
  'gm': 'git merge',
  'gc': 'git checkout',
  'gcb': 'git checkout -b',
  'gco': 'git checkout -b',
};

const command = gitCommands[args[0]];
if (command) {
  let gitCommand = command;

  const needArgs1 = [
    'gcl',
    'gm',
    'gc',
    'gcb',
    'gco',
  ]
  if (needArgs1.includes(args[0]) && args.length > 1) {
    const _arg1 = args[1]
    gitCommand += ` ${_arg1}`;
    if (args[0] === 'gco') {
      gitCommand += ` origin/${_arg1}`;
    }
  }

  execSync(gitCommand, { stdio: 'inherit' });
} else {
  console.error('Invalid command. Available commands: gp, gc, gm, gcb');
}
