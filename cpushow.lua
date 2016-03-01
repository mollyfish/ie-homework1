#!/usr/bin/env luajit

--[[
	This lua script acts similar to the 'free' command, which will
	display some interesting information about how much memory is being
	used in the system.

	This example assumes lj2procfs is installed into the lua path
--]]


local procfs = require("lj2procfs.procfs")
--local jsonify = require("json-util")
local parse = require("print2")


parse.printValue(procfs.stat)

