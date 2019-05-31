var argv = require("yargs");
var create = require('./create.js');
var config = require('./configure.js')

argv
    .usage("Usage $0 <command> [options]")
    .command("create", 'Create a project', (yargs) => {
        create();
    })
    .command("config", 'Configure your system', (yargs) => {
        config();
    })
    .help()
    .argv;

