#!/usr/bin/env node

'use strict';

var markdownLinkCheck = require('markdown-link-check');
var fs = require("fs");
var glob = require("glob");
var path = require("path");
var chalk = require("chalk");


var files = glob.sync("**/*.md", {ignore: ["_includes/**/*.md", "node_modules/**/*.md", "_site/**/*.md"]})

var config = JSON.parse(fs.readFileSync(".markdown-link-check.json"));
config.timeout = 60000;
config.headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
};
config.retryOn = [429, 503];
config.retries = 2;

var opts = Object.assign({}, config);

files.forEach(function(file) {
  var markdown = fs.readFileSync(file).toString();
  let opts = Object.assign({}, config);

  opts.baseUrl = path.dirname(path.resolve(file)) + '/';

  markdownLinkCheck(markdown, opts, function (err, results) {
    if (err) {
        console.error('Error', err);
        return;
    }

    console.log(chalk.green("Reading: " + file));

    results.forEach(function (result) {
      if(result.status === "dead") {
        if (result.statusCode == 500) {
          console.log(chalk.yellow("Server error on target: " + result.link));
        }
        else if (result.statusCode == 403 || result.statusCode == 429) {
          console.log(chalk.yellow("Access restricted (Cloudflare/rate-limit): " + result.link));
        }
        else {
          process.exitCode = 1
          console.log(chalk.red("Dead: " + result.link));
        }
      } else if (result.status === "error") {
        if (result.message && result.message.includes("ETIMEDOUT")) {
          console.log(chalk.yellow("Timeout (slow server): " + result.link));
        } else {
          console.log(chalk.yellow("Warning: " + result.link));
        }
      }
    });
  });
});
