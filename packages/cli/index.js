#!/usr/bin/env node
const { program } = require('commander')

program.description('初始命令').option('-f, --first', "first command").action((opts, command) => {
    console.log(opts)
})

program.command("start").description("开始了").option('-r,--release', 'public type').action((opts, command) => {
    console.log(opts, command)
    console.log(opts.release)
    console.log("end")
})

program.parse()
