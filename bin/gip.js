#!/usr/bin/env node

const { execSync } = require('child_process');

const gitCommand = `ipconfig getifaddr en0`;

execSync(gitCommand, { stdio: 'inherit' });