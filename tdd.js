#!/usr/bin/env node

var gaze_run_interrupt = require('gaze-run-interrupt');

gaze_run_interrupt('{src,test}/**/*.{ts,tsx}', [{
        command: './node_modules/.bin/tslint',
        args: ['--project', 'tsconfig.json']
    },
    {
        command: 'node_modules/.bin/tsc'
    }, {
        command: 'node_modules/.bin/mocha',
        args: ['--recursive', '--reporter', 'min'],
    }]);